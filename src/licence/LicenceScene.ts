import { LicenceEventsManager } from "./LicenceEventsManager";
import { LicenceText } from "./LicenceText";
/**
 * Licence is the final scene where the showing End about the game
 */
export class Licence extends Phaser.Scene {
    private static readonly NEXT_SCENE = "Main";
    private licenceText!: LicenceText;

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
        this.licenceText = new LicenceText(this);
        this.scale.on("resize", this.resize);

        this.input.on("pointerdown", () => {
            this.scene.start(Licence.NEXT_SCENE);
        });
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        if (this.licenceText.update()) {
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
