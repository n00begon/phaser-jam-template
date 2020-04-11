import { Toasty } from "../objects/Toasty";

export class Main extends Phaser.Scene {
    private static readonly LEFTBOUNDS = -150;
    private static readonly RIGHTBOUNDS = 2000;
    private static readonly TOPBOUNDS = -200;
    private static readonly BOTTOMBOUNDS = 1300;

    private toasty!: Toasty;
    private hill!: Phaser.Physics.Matter.Image;

    public constructor() {
        super("Main");
    }

    public create(): void {
        this.setupHill();
        this.setupCamera();
        this.setupBackground();
        this.setupMusic();
        this.toasty = new Toasty(this, this.sys.canvas.width / 2, this.sys.canvas.height / 3);
        this.matter.world.setBounds(Main.LEFTBOUNDS, Main.TOPBOUNDS, Main.RIGHTBOUNDS, Main.BOTTOMBOUNDS);
    }

    public update(): void {
        this.toasty.update();
    }

    private setupBackground(): void {
        const background = this.add.image(
            this.sys.canvas.width / 2,
            (this.sys.canvas.height / 8) * 5,
            "background",
            "backgroundhill",
        );
        background.setDepth(-1);
        background.setScrollFactor(0.2);

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

    private setupHill(): void {
        const physicsShapes = this.cache.json.get("physicsShapes");
        this.hill = this.matter.add.image(this.sys.canvas.width / 2, this.sys.canvas.height, "sprites", "hill", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            shape: physicsShapes.hill, //definitions does not have the shape in them
        });
        this.hill.setStatic(true);
    }

    private setupCamera(): void {
        this.cameras.main.setBackgroundColor(new Phaser.Display.Color(207, 239, 252).color);
        this.cameras.main.setZoom(1.2);
        this.cameras.main.setBounds(Main.LEFTBOUNDS, Main.TOPBOUNDS, Main.RIGHTBOUNDS, Main.BOTTOMBOUNDS);
    }

    private setupMusic(): void {
        const backgroundMusic = this.sound.add("Arpent");
        backgroundMusic.play({
            loop: true,
        });
    }
}
