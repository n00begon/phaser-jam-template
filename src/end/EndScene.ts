import { EndEventsManager } from "./EndEventsManager";
import { EndText } from "./EndText";
/**
 * End is the final scene where the showing End about the game
 */
export class End extends Phaser.Scene {
    private static readonly NEXT_SCENE = "Credits";
    private endText!: EndText;
    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("End");
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
        this.endText = new EndText(this);
        this.scale.on("resize", this.resize);

        this.input.on("pointerdown", () => {
            this.scene.start(End.NEXT_SCENE);
        });
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        if (this.endText.update()) {
            this.scene.start(End.NEXT_SCENE);
        }
    }

    /**
     * Resize gets called when the screen is resized. It fires off an event for the other
     * End objects to respond to
     *
     * @param gameSize - the new size of the screen
     */
    private resize(gameSize: Phaser.Structs.Size): void {
        EndEventsManager.emit("resize", gameSize);
    }
}
