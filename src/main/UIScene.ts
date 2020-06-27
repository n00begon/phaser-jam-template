import { UIManager } from "./UIManager";

/**
 * UI is a scene overlayed on the main scene to hold all the user interface components
 */
export class UI extends Phaser.Scene {
    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("UI");
    }

    /**
     * Create is called when the scene is loaded
     */
    public create(): void {
        new UIManager(this);
    }
}
