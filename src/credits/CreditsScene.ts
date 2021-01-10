import { GameSettings } from "../utilities/GameSettings";
import { FadeText } from "../utilities/text/FadeText";
import { CreditsEventsManager } from "./CreditsEventsManager";
/**
 * Credits is the final scene where the showing credits about the game
 */
export class Credits extends Phaser.Scene {
    private static NEXT_SCENE: "Licence";
    private textList = new Array<FadeText>(5);
    private countdown = GameSettings.END_SCENE_TIME;

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
        this.textList.push(
            new FadeText(
                this,
                "Phaser Jam Template",
                (top - 60) / defaultHeight,
                wait * order++,
                140 * scale,
                CreditsEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                this,
                "By n00begon",
                (top + 100 * order) / defaultHeight,
                wait * order++,
                80 * scale,
                CreditsEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                this,
                "github.com/n00begon/phaser-jam-template",
                (assets + 100 * assetsCount++) / defaultHeight,
                wait * order++,
                60 * scale,
                CreditsEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                this,
                "Click to play again",
                (assets + 100 * assetsCount + 40) / defaultHeight,
                wait * (order + 1),
                40 * scale,
                CreditsEventsManager,
            ),
        );

        this.input.on("pointerdown", () => {
            this.scene.start("Licence");
        });

        this.scale.on("resize", this.resize);
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        let finished = false;
        this.textList.forEach((displayText) => {
            finished = displayText.update();
        });

        if (finished && this.countdown--) {
            this.scene.start(Credits.NEXT_SCENE);
        }
    }

    /**
     * Resize gets called when the screen is resized. It fires off an event for the other
     * credits objects to respond to
     *
     * @param gameSize - the new size of the screen
     */
    private resize(gameSize: Phaser.Structs.Size): void {
        CreditsEventsManager.emit("resize", gameSize);
    }
}
