/**
 * Scalable Text is WebFont text which scales based on the original size of the window
 */
export class ScalableText {
    protected text: Phaser.GameObjects.Text;
    private originalX: number;
    private originalY: number;
    private originalScaleWidth: number;
    private originalScaleHeight: number;
    /**
     * The constructor sets up the ScalableText
     *
     * @param scene - the scene to add the credit text to

     */
    constructor(scene: Phaser.Scene, x: number, y: number, eventManager: Phaser.Events.EventEmitter) {
        this.text = scene.add.text(x, y, "");
        this.originalX = x;
        this.originalY = y;
        this.originalScaleWidth = scene.game.canvas.width;
        this.originalScaleHeight = scene.game.canvas.height;

        eventManager.on("resize", this.handleResize, this);
    }

    private handleResize(gameSize: Phaser.Structs.Size): void {
        const xScale = gameSize.width / this.originalScaleWidth;
        const yScale = gameSize.height / this.originalScaleHeight;
        this.text.setScale(Math.min(xScale, yScale));

        if (this.originalX === this.originalScaleWidth / 2) {
            this.text.setX(gameSize.width / 2);
        } else {
            this.text.setX(Math.min(xScale, yScale) * this.originalX);
        }

        this.text.setY(Math.min(xScale, yScale) * this.originalY);
    }
}
