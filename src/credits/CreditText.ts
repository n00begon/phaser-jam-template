import { ScalableText } from "../utilities/ScalableText";
import { CreditsEventsManager } from "./CreditsEventsManager";

/**
 * CreditText is WebFont text which fades in after a set amount of time
 */
export class CreditText {
    private text: ScalableText;
    private wait: number;
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
        this.text = new ScalableText(
            scene,
            scene.sys.canvas.width / 2,
            yScale * scene.game.canvas.height,
            {
                fontFamily: "Chewy",
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore: TS2322
                fontSize: fontSize,
                color: "#EB4786",
            },
            CreditsEventsManager,
        );
        this.text.setText(words);
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
