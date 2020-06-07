import { UIManager } from "./UIManager";

/**
 * Main is the gameplay scene where the main gameplay loop takes place.
 */
export class UI extends Phaser.Scene {
    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("UI");
    }

    /**
     * Create is called when the scene is loaded and sets up the game
     */
    public create(): void {
        new UIManager(this, this.scene.get("Main"));
    }
}
