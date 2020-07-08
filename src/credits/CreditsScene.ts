import { CreditText } from "./CreditText";
import { CreditsEventsManager } from "./CreditsEventsManager";
/**
 * Credits is the final scene where the showing credits about the game
 */
export class Credits extends Phaser.Scene {
    private textList = new Array<CreditText>(5);

    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("Credits");
    }

    /**
     * Sets the background colour for the scene
     */
    public preload(): void {
        this.cameras.main.setBackgroundColor("#000000");
    }

    /**
     * Create is called when the scene is loaded and sets up the credits list
     */
    public create(): void {
        const top = 200;
        const assets = 540;
        const wait = 100;
        const defaultHeight = 960;
        const scale = this.game.canvas.height / defaultHeight;
        let order = 0;
        let assetsCount = 0;
        this.textList[order] = new CreditText(
            this,
            "You Win!",
            (top - 60) / defaultHeight,
            wait * order++,
            140 * scale,
        );
        this.textList[order] = new CreditText(
            this,
            '"Phaser Jam Template"',
            (top + 100 * order) / defaultHeight,
            wait * order++,
            80 * scale,
        );
        this.textList[order] = new CreditText(
            this,
            "By n00begon",
            (top + 100 * order) / defaultHeight,
            wait * order++,
            80 * scale,
        );

        this.textList[order] = new CreditText(
            this,
            "github.com/n00begon/phaser-jam-template",
            (assets + 100 * assetsCount++) / defaultHeight,
            wait * order++,
            60 * scale,
        );

        this.textList[order] = new CreditText(
            this,
            "Music Arpent from freepd.com by Kevin MacLeod",
            (assets + 100 * assetsCount++) / defaultHeight,
            wait * order++,
            60 * scale,
        );

        this.textList[order] = new CreditText(
            this,
            "Sound Effects and Background from https://kenney.nl/",
            (assets + 100 * assetsCount++) / defaultHeight,
            wait * order++,
            60 * scale,
        );

        this.textList[order] = new CreditText(
            this,
            "Click to play again",
            (assets + 100 * assetsCount++ + 40) / defaultHeight,
            wait * (order + 1),
            40 * scale,
        );

        this.input.on("pointerdown", () => {
            this.scene.start("Main");
        });

        this.scale.on("resize", this.resize);
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        this.textList.forEach(displayText => {
            displayText.update();
        });
    }

    private resize(gameSize: Phaser.Structs.Size): void {
        CreditsEventsManager.emit("resize", gameSize);
    }
}
