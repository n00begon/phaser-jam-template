/**
 * Coint is an item for Toasty to collect.
 */
export class Coin {
    scene: Phaser.Scene;
    coin: Phaser.Physics.Matter.Sprite;
    collected: boolean;

    /**
     * Creates the coin object
     *
     * @param scene - the phaser scene to add the object to
     * @param x - the x position where the coin will start
     * @param y - the y position where the coin will start
     */
    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene;
        const physicsShapes = scene.cache.json.get("physicsShapes");
        this.coin = scene.matter.add.sprite(x, y, "sprites", "gold_1", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            shape: physicsShapes.coin, //definitions does not have the shape in them
        });
        this.coin.setCircle(this.coin.width / 2, {});
        this.coin.setIgnoreGravity(true);
        this.setupCollisions(scene);
        this.collected = false;
        scene.anims.create({
            frameRate: 6,
            frames: [
                { key: "sprites", frame: "gold_1" },
                { key: "sprites", frame: "gold_2" },
                { key: "sprites", frame: "gold_3" },
                { key: "sprites", frame: "gold_4" },
                { key: "sprites", frame: "gold_5" },
                { key: "sprites", frame: "gold_6" },
            ],
            key: "coinSpin",
            repeat: -1,
        });
        this.coin.play("coinSpin", true);
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
                    this.coin.destroy();
                }
            },
        );
    }
}
