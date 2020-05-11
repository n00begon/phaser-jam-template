import { Coin } from "./Coin";

/**
 * Coint is an item for Toasty to collect.
 */
export class CoinSet {
    private coins: Coin[];
    private originalSize: number;

    /**
     * Creates the coin object
     *
     * @param scene - the phaser scene to add the object to
     * @param x - the x position where the coinSet will start
     * @param y - the y position where the coinSet will start
     */
    constructor(scene: Phaser.Scene, amount: number, x: number, y: number) {
        this.coins = new Array<Coin>();
        this.originalSize = amount;

        for (let i = 0; i < this.originalSize; i++) {
            this.coins.push(new Coin(scene, x, i, y));
        }
    }

    public getOriginalSize(): number {
        return this.originalSize;
    }

    public update(): number {
        this.coins.forEach((coin, index) => {
            if (coin.update()) {
                this.coins.splice(index, 1);
            }
        });

        return this.originalSize - this.coins.length;
    }
}
