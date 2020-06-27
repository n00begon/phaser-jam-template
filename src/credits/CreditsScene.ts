import { CreditText } from "./CreditText";

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
        let order = 0;
        let assetsCount = 0;
        this.textList[order] = new CreditText(this, "You Win!", top - 60, wait * order++, 140);
        this.textList[order] = new CreditText(this, '"Phaser Jam Template"', top + 100 * order, wait * order++, 80);
        this.textList[order] = new CreditText(this, "By n00begon", top + 100 * order, wait * order++, 80);

        this.textList[order] = new CreditText(
            this,
            "github.com/n00begon/phaser-jam-template",
            assets + 100 * assetsCount++,
            wait * order++,
            60,
        );

        this.textList[order] = new CreditText(
            this,
            "Music Arpent from freepd.com by Kevin MacLeod",
            assets + 100 * assetsCount++,
            wait * order++,
            60,
        );

        this.textList[order] = new CreditText(
            this,
            "Sound Effects and Background from https://kenney.nl/",
            assets + 100 * assetsCount++,
            wait * order++,
            60,
        );

        this.textList[order] = new CreditText(
            this,
            "Click to play again",
            assets + 100 * assetsCount++ + 40,
            wait * (order + 1),
            40,
        );

        this.input.on("pointerdown", () => {
            this.scene.start("Main");
        });
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        this.textList.forEach(displayText => {
            displayText.update();
        });
    }
}
