import { Toasty } from "../objects/Toasty";

export class Main extends Phaser.Scene {
    private toasty!: Toasty;
    private hill!: Phaser.Physics.Matter.Image;

    public constructor() {
        super("Main");
    }

    public create(): void {
        this.toasty = new Toasty(this, this.sys.canvas.width / 2, this.sys.canvas.height / 2);

        const physicsShapes = this.cache.json.get("physicsShapes");
        this.hill = this.matter.add.image(this.sys.canvas.width / 2, this.sys.canvas.height, "sheet", "hill", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            shape: physicsShapes.hill, //definitions does not have the shape in them
        });
        this.hill.setStatic(true);

        this.cameras.main.setBackgroundColor(new Phaser.Display.Color(207, 239, 252).color);

        const backgroundMusic = this.sound.add("Arpent");
        backgroundMusic.play({
            loop: true,
        });
    }

    public update(): void {
        this.toasty.update();
    }
}
