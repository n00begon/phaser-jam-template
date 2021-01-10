import { GameSettings } from "../utilities/GameSettings";
import { TypewriterText } from "../utilities/text/TypewriterText";
import { EndEventsManager } from "./EndEventsManager";
/**
 * End is the final scene where the showing End about the game
 */
export class End extends Phaser.Scene {
    private textList = new Array<TypewriterText>(2);
    private countdown = GameSettings.END_SCENE_TIME;
    private static readonly NEXT_SCENE = "Credits";

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
        this.countdown = GameSettings.END_SCENE_TIME;
        const top = 200;
        const wait = 100;
        const defaultHeight = 960;
        const scale = this.game.canvas.height / defaultHeight;
        let order = 0;
        this.textList.push(
            new TypewriterText(
                this,
                "You ate all the coins!",
                (top - 60) / defaultHeight,
                wait * order++,
                GameSettings.LARGE_FONT_SIZE * scale,
                EndEventsManager,
            ),
        );

        this.textList.push(
            new TypewriterText(
                this,
                "Click to play again",
                (top + 600) / defaultHeight,
                wait * (order + 1),
                GameSettings.SMALL_FONT_SIZE * scale,
                EndEventsManager,
            ),
        );

        this.input.on("pointerdown", () => {
            this.scene.start(End.NEXT_SCENE);
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

        if (finished && this.countdown-- <= 0) {
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
