import { GameSettings } from "../GameSettings";
import { ScalableText } from "./ScalableText";

/**
 * PlainText is WebFont text
 */
export class PlainText {
    private text: ScalableText;
    private wait: number;
    private words: string;
    private count = 0;

    /**
     * The constructor sets up the FadeText
     *
     * @param scene - the scene to add the text to
     * @param words - the string which will make up the text
     * @param height - the y position on the screen to display the text
     * @param wait - how many update cycles until this typewriter text starts
     * @param fontSize - the size of the font for this text
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
