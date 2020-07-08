import { CreditsEventsManager } from "./CreditsEventsManager";

/**
 * CreditText is WebFont text which fades in after a set amount of time
 */
export class CreditText {
    private text: Phaser.GameObjects.Text;
    private wait: number;
    private originalY: number;
    private originalScaleWidth: number;
    private originalScaleHeight: number;
    /**
     * The constructor sets up the CreditText
     *
     * @param scene - the scene to add the credit text to
     * @param words - the string which will make up the credits text
     * @param height - the y position on the screen to display the credits text
     * @param wait - how many update cycles until this credit text should fase in
     * @param fontSize - the size of the font for this credit text
     */
    constructor(scene: Phaser.Scene, words: string, yScale: number, wait: number, fontSize: number) {
        this.text = scene.add.text(scene.sys.canvas.width / 2, yScale * scene.game.canvas.height, words, {
            fontFamily: "Chewy",
            fontSize: fontSize,
            color: "#EB4786",
        });
        this.originalY = yScale * scene.game.canvas.height;
        this.originalScaleWidth = scene.game.canvas.width;
        this.originalScaleHeight = scene.game.canvas.height;
        this.text.alpha = 0;
        this.text.setAlign("center");
        this.text.setOrigin(0.5);
        this.wait = wait;

        CreditsEventsManager.on("resize", this.handleResize, this);
    }

    public update(): boolean {
        if (this.wait > 0) {
            this.wait--;
            return false;
        }
        this.text.alpha += 0.007;
        return this.text.alpha >= 1;
    }

    private handleResize(gameSize: Phaser.Structs.Size): void {
        const xScale = gameSize.width / this.originalScaleWidth;
        const yScale = gameSize.height / this.originalScaleHeight;
        this.text.setScale(xScale);
        this.text.setX(gameSize.width / 2);
        this.text.setY(Math.min(xScale, yScale) * this.originalY);
    }
}
