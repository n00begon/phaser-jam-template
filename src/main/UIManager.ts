import { ScoreText } from "./ScoreText";
import { EventsManager } from "./EventsManager";

/**
 * UIManager controls the user interface elements displayed to the user
 */
export class UIManager {
    private scoreText: ScoreText;

    /**
     * Adds the interactive objects to the scene
     */
    constructor(scene: Phaser.Scene) {
        EventsManager.on("scoreChange", this.handleScoreChange, this);

        this.scoreText = new ScoreText(scene, 200, 100);
        this.scoreText.update(0);
    }

    private handleScoreChange(amount: number): void {
        this.scoreText.update(amount);
    }
}
