/**
 * Scaler is a class for handling scaling calculations. It is split out in this abstract
 * form so it is easy to unit test. The tests for it are in Scaler.test.ts
 */
export class Scaler {
    private originalX: number;
    private originalY: number;
    private originalWidth: number;
    private originalHeight: number;

    /**
     * Creates a scaler object representing the original position and size.
     *
     * @param x - the original x position of the object
     * @param y - the original y position of the object
     * @param width - the original width of the game window
     * @param height - the original height of the game window
     */
    constructor(x: number, y: number, width: number, height: number) {
        this.originalX = x;
        this.originalY = y;
        this.originalWidth = width;
        this.originalHeight = height;
    }

    /**
     * Scales the position and size based on a new game size.
     * @param gameSize - the new game window size to scale to.
     * @returns a new set of scale values to apply
     */
    public scale(gameSize: GameSize): ScaleValues {
        const xScale = gameSize.width / this.originalWidth;
        const yScale = gameSize.height / this.originalHeight;
        let xValue = 0;

        // If the object was originally in the center keep it in the center of the new game window.
        if (this.originalX === this.originalWidth / 2) {
            xValue = gameSize.width / 2;
        } else {
            xValue = Math.min(xScale, yScale) * this.originalX;
        }
        return {
            mainScale: Math.min(xScale, yScale),
            xValue,
            yValue: Math.min(xScale, yScale) * this.originalY,
        };
    }
}

/**
 * Scale values representing the new size, x and y positions.
 */
export interface ScaleValues {
    mainScale: number;
    xValue: number;
    yValue: number;
}

/**
 * Game size - the new game window size. In an interface rather than the Phaser Struct so it is
 * easier to unit test.
 */
interface GameSize {
    width: number;
    height: number;
}
