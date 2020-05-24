import { Toasty } from "./objects/Toasty";
import { ScoreText } from "./ScoreText";
import { CoinSet } from "./objects/CoinSet";
import { Hill } from "./objects/Hill";

export class InteractiveManager {
    private static readonly LEFTBOUNDS = -150;
    private static readonly RIGHTBOUNDS = 2000;
    private static readonly TOPBOUNDS = -200;
    private static readonly BOTTOMBOUNDS = 1300;

    private scene: Phaser.Scene;
    private maxScore: number;
    private toasty: Toasty;
    private coinSets: CoinSet[];
    private scoreText: ScoreText;

    /**
     * Adds the interactive objects to the scene
     */
    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.setupAnimations(scene);
        this.setupCamera(scene);
        scene.matter.world.setBounds(
            InteractiveManager.LEFTBOUNDS,
            InteractiveManager.TOPBOUNDS,
            InteractiveManager.RIGHTBOUNDS,
            InteractiveManager.BOTTOMBOUNDS,
        );

        this.maxScore = 0;
        this.toasty = new Toasty(scene, scene.sys.canvas.width / 2, scene.sys.canvas.height / 3);

        this.coinSets = new Array<CoinSet>();

        this.coinSets.push(new CoinSet(scene, 3, 200, 300));
        this.coinSets.push(new CoinSet(scene, 3, 1400, 300));

        this.coinSets.forEach(coinSet => {
            this.maxScore += coinSet.getOriginalSize();
        });

        new Hill(scene);

        this.scoreText = new ScoreText(scene, 200, 100);
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
            this.scene.scene.start("Credits");
        }

        this.scoreText.update(score);
    }

    /**
     * Setups the camera
     */
    private setupCamera(scene: Phaser.Scene): void {
        scene.cameras.main.setBackgroundColor(new Phaser.Display.Color(207, 239, 252).color);
        scene.cameras.main.setZoom(1.2);
        scene.cameras.main.setBounds(
            InteractiveManager.LEFTBOUNDS,
            InteractiveManager.TOPBOUNDS,
            InteractiveManager.RIGHTBOUNDS,
            InteractiveManager.BOTTOMBOUNDS,
        ); // Stops the camera moving off the edge of the screen
    }

    private setupAnimations(scene: Phaser.Scene): void {
        scene.anims.create({
            frameRate: 10,
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
    }
}
