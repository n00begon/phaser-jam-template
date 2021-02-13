import { InstructionsEventsManager } from "./InstructionsEventsManager";
import { InstructionsText } from "./InstructionsText";
/**
 * Instructions is the final scene where the showing Instructions about the game
 */
export class Instructions extends Phaser.Scene {
    private static readonly NEXT_SCENE = "Main";
    private instructionsText!: InstructionsText;
    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("Instructions");
    }

    /**
     * Sets the background colour for the scene
     */
    public preload(): void {
        this.cameras.main.setBackgroundColor("#000000");
    }

    /**
     * Create is called when the scene is loaded and sets up the Game Instructions Text
     */
    public create(): void {
        this.instructionsText = new InstructionsText(this);
        this.scale.on("resize", this.resize);

        this.input.on("pointerdown", () => {
            this.scene.start(Instructions.NEXT_SCENE);
        });
    }

    /**
     * The update loop gets the text to appear on screen
     */
    public update(): void {
        this.instructionsText.update();
    }

    /**
     * Resize gets called when the screen is resized. It fires off an event for the other
     * Instructions objects to respond to
     *
     * @param gameSize - the new size of the screen
     */
    private resize(gameSize: Phaser.Structs.Size): void {
        InstructionsEventsManager.emit("resize", gameSize);
    }
}
