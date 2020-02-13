export class Main extends Phaser.Scene {

    public constructor() {
        super("Main");
    }

    public create(): void {
        const logo = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "sheet", "toast");
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        const backgroundMusic = this.sound.add("Arpent");
        backgroundMusic.play({
            loop: true,
        });
    }
}