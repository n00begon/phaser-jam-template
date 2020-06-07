import { AudioManager } from "./AudioManager";
import { InteractiveManager } from "./InteractiveManager";
import { BackgroundManager } from "./BackgroundManager";

/**
 * Main is the gameplay scene where the main gameplay loop takes place.
 */
export class Main extends Phaser.Scene {
    private interactiveManager!: InteractiveManager;

    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("Main");
    }

    /**
     * Create is called when the scene is loaded and sets up the game
     */
    public create(): void {
        new AudioManager(this);
        new BackgroundManager(this);
        this.interactiveManager = new InteractiveManager(this);
        this.scene.run("UI");
    }

    /**
     * The main update loop for the scene.
     */
    public update(): void {
        this.interactiveManager.update();
    }
}
