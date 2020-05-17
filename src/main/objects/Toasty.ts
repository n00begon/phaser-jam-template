/**
 * Toasty is the character that the player controls.
 */
export class Toasty {
    private static readonly TURN_SPEED = 0.06;
    private static readonly ACCELERATION = Toasty.TURN_SPEED / 20;
    private static readonly MOVE_SPEED = 5;
    private static readonly JUMP_HEIGHT = 16;
    private toasty: Phaser.Physics.Matter.Image;
    private scene: Phaser.Scene;
    private canJump = false;
    private currentSpeed = 0;

    private jumpKey: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private rightKey: Phaser.Input.Keyboard.Key;
    private leftKey2: Phaser.Input.Keyboard.Key;
    private rightKey2: Phaser.Input.Keyboard.Key;

    /**
     * Creates the toasty object
     *
     * @param scene - the phaser scene to add the object to
     * @param x - the x position where toasty will start
     * @param y - the y position where toasty will start
     */
    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene;
        const physicsShapes = scene.cache.json.get("physicsShapes");
        this.toasty = scene.matter.add.image(x, y, "sprites", "toasty", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            shape: physicsShapes.toasty, //definitions does not have the shape in them
        });
        this.toasty.setScale(0.8);
        this.toasty.setFriction(0);
        this.scene.cameras.main.startFollow(this.toasty);

        this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.leftKey2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.setupCollisions(scene);
    }

    /**
     * The update cycle. This is listening for key presses and controlling the movement
     */
    public update(): void {
        let direction = 0;
        if (this.leftKey.isDown || this.leftKey2.isDown) {
            direction = -1;
        }

        if (this.rightKey.isDown || this.rightKey2.isDown) {
            direction = 1;
        }

        if (direction !== 0) {
            this.currentSpeed += direction * Toasty.ACCELERATION;
            this.currentSpeed = Math.min(Toasty.TURN_SPEED, Math.max(-Toasty.TURN_SPEED, this.currentSpeed));

            this.toasty.setAngularVelocity(this.currentSpeed);
            if (this.canJump) {
                this.toasty.setVelocityX((this.currentSpeed / Toasty.TURN_SPEED) * Toasty.MOVE_SPEED);
            }
        } else {
            this.currentSpeed *= 0.95;
        }

        if (this.jumpKey.isDown && this.canJump) {
            this.toasty.setVelocityY(-Toasty.JUMP_HEIGHT);
            this.canJump = false;
        }
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
                if (bodyA.gameObject === this.toasty || bodyB.gameObject === this.toasty) {
                    this.canJump = true;
                }
            },
        );
    }
}
