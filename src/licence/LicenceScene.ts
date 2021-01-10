import { GameSettings } from "../utilities/GameSettings";
import { PlainText } from "../utilities/text/PlainText";
import { LicenceEventsManager } from "./LicenceEventsManager";
/**
 * Licence is the final scene where the showing End about the game
 */
export class Licence extends Phaser.Scene {
    private static NEXT_SCENE: "Main";
    private textList = new Array<PlainText>(3);
    private countdown = GameSettings.END_SCENE_TIME;
    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("Licence");
    }

    /**
     * Sets the background colour for the scene
     */
    public preload(): void {
        this.cameras.main.setBackgroundColor("#000000");
    }

    /**
     * Create is called when the scene is loaded and sets up the Game End Text
     */
    public create(): void {
        const top = 200;
        const gap = 100;
        const wait = 100;
        const defaultHeight = 960;
        const scale = this.game.canvas.height / defaultHeight;
        let order = 0;
        let count = 0;

        this.textList.push(
            new PlainText(
                this,
                "Asset Licences",
                (top - 150 + gap * count++) / defaultHeight,
                wait * order++,
                140 * scale,
                LicenceEventsManager,
            ),
        );

        this.textList.push(
            new PlainText(
                this,
                "Music Arpent from freepd.com by Kevin MacLeod",
                (top + gap * count++) / defaultHeight,
                wait * order++,
                60 * scale,
                LicenceEventsManager,
            ),
        );

        this.textList.push(
            new PlainText(
                this,
                "Sound Effects and Background from https://kenney.nl/",
                (top + gap * count++) / defaultHeight,
                wait * order++,
                60 * scale,
                LicenceEventsManager,
            ),
        );

        this.input.on("pointerdown", () => {
            this.scene.start(Licence.NEXT_SCENE);
        });

        this.scale.on("resize", this.resize);
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        if (this.countdown--) {
            this.scene.start(Licence.NEXT_SCENE);
        }
    }

    /**
     * Resize gets called when the screen is resized. It fires off an event for the other
     * End objects to respond to
     *
     * @param gameSize - the new size of the screen
     */
    private resize(gameSize: Phaser.Structs.Size): void {
        LicenceEventsManager.emit("resize", gameSize);
    }
}
