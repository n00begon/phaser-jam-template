import { MainEventsManager } from "../MainEventsManager";

/**
 * The hill is the static physics shape for Toasty to land on.
 */
export class Hill {
    private hill: Phaser.Physics.Matter.Image;

    constructor(scene: Phaser.Scene, centerX: number) {
        const physicsShapes = scene.cache.json.get("physicsShapes");
        this.hill = scene.matter.add.image(centerX, 800, "sprites", "hill", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            shape: physicsShapes.hill, //definitions does not have the shape in them
        });
        this.hill.setStatic(true); // Static because they are not going to move
        this.setupCollisions(scene);
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
                if (bodyA.gameObject === this.hill || bodyB.gameObject === this.hill) {
                    MainEventsManager.emit("bounce");
                }
            },
        );
    }
}
