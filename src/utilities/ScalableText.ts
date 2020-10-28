import { Scaler } from "./Scaler";

/**
 * Scalable Text is WebFont text which scales based on the original size of the window
 */
export class ScalableText extends Phaser.GameObjects.Text {
    private scaler: Scaler;
    /**
     * The constructor sets up the ScalableText
     *
     * @param scene - the scene to add the credit text to

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
        console.log("Hi", x, y, style.color, eventManager);
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
