export class Scaler {
    private originalX: number;
    private originalY: number;
    private originalWidth: number;
    private originalHeight: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.originalX = x;
        this.originalY = y;
        this.originalWidth = width;
        this.originalHeight = height;
    }

    public scale(gameSize: GameSize): ScaleValues {
        const xScale = gameSize.width / this.originalWidth;
        const yScale = gameSize.height / this.originalHeight;
        let xValue = 0;

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

export interface ScaleValues {
    mainScale: number;
    xValue: number;
    yValue: number;
}

interface GameSize {
    width: number;
    height: number;
}
