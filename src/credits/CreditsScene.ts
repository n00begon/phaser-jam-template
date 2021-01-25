import { CreditsEventsManager } from "./CreditsEventsManager";
import { CreditsText } from "./CreditsText";
/**
 * Credits is the final scene where the showing credits about the game
 */
export class Credits extends Phaser.Scene {
    private static readonly NEXT_SCENE = "Licence";
    private creditsText!: CreditsText;

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
        this.scale.on("resize", this.resize);
        this.creditsText = new CreditsText(this);

        this.input.on("pointerdown", () => {
            this.scene.start(Credits.NEXT_SCENE);
        });
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        if (this.creditsText.update()) {
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
