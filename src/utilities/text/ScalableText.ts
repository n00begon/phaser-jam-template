import { Scaler } from "../Scaler";

/**
 * Scalable Text is WebFont text item which scales based on the original size of the window
 */
export class ScalableText extends Phaser.GameObjects.Text {
    private scaler: Scaler;
    /**
     * The constructor sets up the ScalableText
     *
     * @param scene - the scene to add the credit text to
     * @param x - the x position on the screen to display the text
     * @param y - the y position on the screen to display the text
     * @param style - a Phaser TextStyle object
     * @param eventManager - an object that emits resize events for the text
     */
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        style: Phaser.Types.GameObjects.Text.TextStyle,
        eventManager: Phaser.Events.EventEmitter,
    ) {
        super(scene, x, y, "", style);
        scene.add.existing(this);
        this.scaler = new Scaler(x, y, scene.game.canvas.width, scene.game.canvas.height);
        eventManager.on("resize", this.handleResize, this);
    }

    /**
     * Handles a resize event by using the scaler to calculate the new font size, x and y positions.
     * @param gameSize - a Phaser Struct of the new game window size.
     */
    private handleResize(gameSize: Phaser.Structs.Size): void {
        const result = this.scaler.scale(gameSize);
        this.setScale(result.mainScale);
        this.setX(result.xValue);
        this.setY(result.yValue);
    }
}
