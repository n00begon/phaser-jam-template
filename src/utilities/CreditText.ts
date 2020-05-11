export class CreditText {
    public text: Phaser.GameObjects.Text;
    public wait: number;
    constructor(scene: Phaser.Scene, words: string, height: number, wait: number, fontSize: number) {
        this.text = scene.add.text(scene.sys.canvas.width / 2, height, words, {
            fontFamily: "Chewy",
            fontSize: fontSize,
            color: "#EB4786",
        });
        this.text.alpha = 0;
        this.text.setAlign("center");
        this.text.setOrigin(0.5);
        this.wait = wait;
    }

    public update(): boolean {
        if (this.wait > 0) {
            this.wait--;
            return false;
        }
        this.text.alpha += 0.007;
        return this.text.alpha >= 1;
    }
}
