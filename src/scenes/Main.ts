import { Toasty } from "../objects/Toasty";
import { CoinSet } from "../objects/CoinSet";
import { ScoreText } from "../utilities/ScoreText";

/**
 * Main is the gameplay scene wgere the main gameplay loop takes place.
 */
export class Main extends Phaser.Scene {
    private static readonly LEFTBOUNDS = -150;
    private static readonly RIGHTBOUNDS = 2000;
    private static readonly TOPBOUNDS = -200;
    private static readonly BOTTOMBOUNDS = 1300;

    private maxScore!: number;
    private toasty!: Toasty;
    private coinSets!: CoinSet[];
    private hill!: Phaser.Physics.Matter.Image;
    private scoreText!: ScoreText;
    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("Main");
    }

    /**
     * Create is called when the scene is loaded and sets up the game
     */
    public create(): void {
        this.maxScore = 0;
        this.setupHill();
        this.setupCamera();
        this.setupBackground();
        this.setupMusic();
        this.setupCoins();
        this.toasty = new Toasty(this, this.sys.canvas.width / 2, this.sys.canvas.height / 3);
        this.matter.world.setBounds(Main.LEFTBOUNDS, Main.TOPBOUNDS, Main.RIGHTBOUNDS, Main.BOTTOMBOUNDS);

        this.scoreText = new ScoreText(this, 200, 100);
    }

    /**
     * The main update loop for the scene.
     */
    public update(): void {
        this.toasty.update();
        let score = 0;
        this.coinSets.forEach(coinSet => {
            score += coinSet.update();
        });
        if (score >= this.maxScore) {
            console.log("End");
        }

        this.scoreText.update(score);
    }

    /**
     * Setups the background images for the parallax effect
     */
    private setupBackground(): void {
        const background = this.add.image(
            this.sys.canvas.width / 2,
            (this.sys.canvas.height / 8) * 5,
            "background",
            "backgroundHill",
        );
        background.setDepth(-1); // Depth -1 to ensure it is behind the gameplay
        background.setScrollFactor(0.2); // A scroll factor lower than one means it moves slower as the camera moves giving it a distant look

        const sky = this.add.image(
            this.sys.canvas.width / 2,
            (this.sys.canvas.height / 8) * 5,
            "background",
            "backgroundEmpty",
        );
        sky.setDepth(-2);
        sky.setScrollFactor(0.05);
        sky.setScale(1.5);
    }

    /**
     * Setups the hills for toasty to walk on
     */
    private setupHill(): void {
        const physicsShapes = this.cache.json.get("physicsShapes");
        this.hill = this.matter.add.image(this.sys.canvas.width / 2, this.sys.canvas.height, "sprites", "hill", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            shape: physicsShapes.hill, //definitions does not have the shape in them
        });
        this.hill.setStatic(true); // Static because they are not going to move
    }

    /**
     * Setups the camera
     */
    private setupCamera(): void {
        this.cameras.main.setBackgroundColor(new Phaser.Display.Color(207, 239, 252).color);
        this.cameras.main.setZoom(1.2);
        this.cameras.main.setBounds(Main.LEFTBOUNDS, Main.TOPBOUNDS, Main.RIGHTBOUNDS, Main.BOTTOMBOUNDS); // Stops the camera moving off the edge of the screen
    }

    /**
     * Setups the looping background track
     */
    private setupMusic(): void {
        const backgroundMusic = this.sound.add("Arpent");
        backgroundMusic.play({
            loop: true,
            volume: 0.3,
        });
    }

    private setupCoins(): void {
        this.sound.add("powerUp4");
        this.anims.create({
            frameRate: 6,
            frames: [
                { key: "sprites", frame: "gold_1" },
                { key: "sprites", frame: "gold_2" },
                { key: "sprites", frame: "gold_3" },
                { key: "sprites", frame: "gold_4" },
                { key: "sprites", frame: "gold_5" },
                { key: "sprites", frame: "gold_6" },
            ],
            key: "coinSpin",
            repeat: -1,
        });
        this.coinSets = new Array<CoinSet>();

        this.coinSets.push(new CoinSet(this, 3, 200, 300));
        this.coinSets.push(new CoinSet(this, 3, 1400, 300));

        this.coinSets.forEach(coinSet => {
            this.maxScore += coinSet.getOriginalSize();
        });
    }
}
