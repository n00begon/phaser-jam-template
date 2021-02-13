import { GameSettings } from "../GameSettings";
import { ScalableText } from "./ScalableText";

/**
 * PlainText is WebFont text item which displays immediately
 */
export class PlainText {
    private text: ScalableText;
    private wait: number;
    private words: string;
    private count = 0;

    /**
     * The constructor sets up the PlainText
     *
     * @param scene - the scene to add the text to
     * @param words - the string which will make up the text
     * @param yScale - the relative y position of the text on the screen
     * @param wait - how many update cycles until this text should appear on the screen
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
            scene.sys.canvas.width / 20,
            yScale * scene.game.canvas.height,
            {
                fontFamily: GameSettings.DISPLAY_FONT,
                color: GameSettings.FONT_COLOUR,
            },
            eventManager,
        );
        this.text.setFontSize(fontSize);
        this.text.setText(words);
        this.text.setAlign("left");
        this.text.setOrigin(0);
        this.words = words;
        this.wait = wait;
    }
}
