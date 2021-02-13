import { GameSettings } from "../GameSettings";
import { ScalableText } from "./ScalableText";

/**
 * TypewriterText is WebFont text item which types one letter at a time
 */
export class TypewriterText {
    private static readonly LETTER_PAUSE = 2;
    private text: ScalableText;
    private wait: number;
    private words: string;
    private count = 0;
    private letterWait = 0;

    /**
     * The constructor sets up the TypewriterText
     *
     * @param scene - the scene to add the text to
     * @param words - the string which will make up the text
     * @param yScale - the relative y position of the text on the screen
     * @param wait - how many update cycles until this typewriter text starts
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
        this.text.setText("");
        this.text.setAlign("left");
        this.text.setOrigin(0);
        this.words = words;
        this.wait = wait;
    }

    /**
     * Types out the text. When the text is fully displayed it returns true otherwise false.
     */
    public update(): boolean {
        if (this.wait > 0) {
            this.wait--;
            return false;
        }
        if (this.letterWait === TypewriterText.LETTER_PAUSE) {
            this.text.setText(this.words.substr(0, this.count++));
            this.letterWait = 0;
        } else {
            this.letterWait++;
        }

        return this.count >= this.words.length;
    }
}
