import { MainEventsManager } from "../MainEventsManager";

/**
 * Coin is a physics item for Toasty to collect.
 */
export class Coin {
    static readonly GAP = 10;
    scene: Phaser.Scene;
    coin: Phaser.Physics.Matter.Sprite;
    collectionSound: Phaser.Sound.BaseSound;

    /**
     * Creates the coin object
     *
     * @param scene - the phaser scene to add the object to
     * @param x - the x position
     * @param offset -- the offset (in coins) from the x position where the coin will start
     * @param y - the y position where the coin will start
     */
    constructor(scene: Phaser.Scene, x: number, offset: number, y: number) {
        this.scene = scene;
        const physicsShapes = scene.cache.json.get("physicsShapes");
        this.coin = scene.matter.add.sprite(x, y, "sprites", "gold_1", physicsShapes.coin);
        this.coin.setCircle(this.coin.width / 2, {});
        this.coin.setX(x + (this.coin.width + Coin.GAP) * offset);
        this.coin.setIgnoreGravity(true);
        this.coin.setMass(0.0001); //Coin needs to be light so toasty isn't pushed back by the collision
        this.setupCollisions(scene);
        this.coin.play("coinSpin", true);
        this.collectionSound = scene.sound.get("powerUp4");
    }

    /**
     * The function which is called when the coin is collected. Emits "collection" to let listeners know this has happened.
     */
    private collect(): void {
        this.coin.destroy();
        this.collectionSound.play();
        MainEventsManager.emit("collection", 1);
    }

    /**
     * Sets up the collision listener. Currently listening to set when Toasty can jump.
     *
     * @param scene - the scene to set the collisions on
     */
    private setupCollisions(scene: Phaser.Scene): void {
        scene.matter.world.on(
            "collisionstart",
            (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                _event: any,
                bodyA: { gameObject: Phaser.Physics.Matter.Image },
                bodyB: { gameObject: Phaser.Physics.Matter.Image },
            ) => {
                if (bodyA.gameObject === this.coin || bodyB.gameObject === this.coin) {
                    this.collect();
                }
            },
        );
    }
}
