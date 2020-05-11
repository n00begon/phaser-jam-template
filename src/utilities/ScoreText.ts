export class ScoreText {
    public text: Phaser.GameObjects.Text;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.text = scene.add.text(x, y, "", {
            fontFamily: "Chewy",
            fontSize: 100,
            color: "#EB4786",
        });

        this.text.setAlign("left");
        this.text.setOrigin(0, 0);
        this.text.setScrollFactor(0, 0);
    }

    public update(score: number): void {
        this.text.setText(`Score: ${score}`);
    }
}
