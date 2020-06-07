import { ScoreText } from "./ScoreText";

export class UIManager {
    private scoreText: ScoreText;

    /**
     * Adds the interactive objects to the scene
     */
    constructor(scene: Phaser.Scene, gamescene: Phaser.Scene) {
        gamescene.events.on("scoreChange", this.handleScoreChange, this);

        this.scoreText = new ScoreText(scene, 200, 100);
        this.scoreText.update(0);
    }

    private handleScoreChange(amount: number): void {
        this.scoreText.update(amount);
    }
}
