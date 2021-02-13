import { GameSettings } from "../GameSettings";
import { ScalableText } from "./ScalableText";

/**
 * FadeText is WebFont text item which fades in after a set amount of time
 */
export class FadeText {
    private text: ScalableText;
    private wait: number;

    /**
     * The constructor sets up the FadeText
     *
     * @param scene - the scene to add the text to
     * @param words - the string which will make up the text
     * @param yScale - the relative y position of the text on the screen
     * @param wait - how many update cycles until this text should fade in
     * @param fontSize - the size of the font for this text
     * @param eventManager - an object that emits resize events for the text
     */
    constructor(
        scene: Phaser.Scene,
        words: string,
        yScale: number,
        wait: number,
        fontSize: number,
        eventManager: Phaser.Events.EventEmitter,
    ) {
        this.text = new ScalableText(
            scene,
            scene.sys.canvas.width / 2,
            yScale * scene.game.canvas.height,
            {
                fontFamily: GameSettings.DISPLAY_FONT,
                color: GameSettings.FONT_COLOUR,
            },
            eventManager,
        );
        this.text.setFontSize(fontSize);
        this.text.setText(words);
        this.text.alpha = 0;
        this.text.setAlign("center");
        this.text.setOrigin(0.5);
        this.wait = wait;
    }

    /**
     * Fades in the text. When the text is fully displayed it returns true otherwise false.
     */
    public update(): boolean {
        if (this.wait > 0) {
            this.wait--;
            return false;
        }
        this.text.alpha += 0.007;
        return this.text.alpha >= 1;
    }
}
