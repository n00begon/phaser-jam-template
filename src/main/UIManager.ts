import { ScoreText } from "./ScoreText";
import { MainEventsManager } from "./MainEventsManager";

/**
 * UIManager controls the user interface elements displayed to the user
 */
export class UIManager {
    private scoreText: ScoreText;

    /**
     * Adds the interactive objects to the scene
     */
    constructor(scene: Phaser.Scene) {
        MainEventsManager.on("scoreChange", this.handleScoreChange, this);

        this.scoreText = new ScoreText(scene, 30, 30);
        this.scoreText.update(0);
    }

    private handleScoreChange(amount: number): void {
        this.scoreText.update(amount);
    }
}
