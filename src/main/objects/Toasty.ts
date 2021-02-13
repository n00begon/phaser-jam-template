import { MainEventsManager } from "../MainEventsManager";

/**
 * Toasty is the character that the player controls.
 */
export class Toasty {
    private static readonly TURN_SPEED = 0.06;
    private static readonly ACCELERATION = Toasty.TURN_SPEED / 20;
    private static readonly MOVE_SPEED = 5;
    private static readonly JUMP_HEIGHT = 20;
    private toasty: Phaser.Physics.Matter.Image;
    private scene: Phaser.Scene;
    private canJump = false;
    private currentSpeed = 0;
    private lastY: number;
    private leftMove = false;
    private rightMove = false;
    private jumpMove = false;

    /**
     * Creates the toasty object
     *
     * @param scene - the phaser scene to add the object to
     * @param x - the x position where toasty will start
     * @param y - the y position where toasty will start
     */
    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.scene = scene;
        // this.toasty = scene.matter.add.image(x, y, "sprites", "toasty", physicsShapes.toasty);
        const physicsShapes = scene.cache.json.get("physicsShapes");
        this.toasty = scene.matter.add.image(x, y, "sprites", "toasty", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            shape: physicsShapes.toasty, //definitions does not have the shape in them
        });

        this.lastY = y;
        this.toasty.setScale(0.8);
        this.toasty.setFriction(0);

        // The main camera follows the player
        this.scene.cameras.main.startFollow(this.toasty);

        MainEventsManager.on("bounce", this.handleBounce, this);
        MainEventsManager.on("leftMove", this.handleLeftMove, this);
        MainEventsManager.on("rightMove", this.handleRightMove, this);
        MainEventsManager.on("jumpMove", this.handleJumpMove, this);
    }

    /**
     * The update cycle.This is controlling the movement
     */
    public update(): void {
        let direction = 0;
        if (this.leftMove) {
            direction = -1;
        }

        if (this.rightMove) {
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

        if (this.jumpMove && this.canJump) {
            this.toasty.setVelocityY(-Toasty.JUMP_HEIGHT);
            this.canJump = false;
        }
        this.lastY = this.toasty.y;
        this.leftMove = false;
        this.rightMove = false;
        this.jumpMove = false;
    }

    /**
     * handles the juice when toasty lands.
     */
    private handleBounce(): void {
        this.canJump = true;
        if (this.toasty.y) {
            const verticalSpeed = this.toasty.y - this.lastY;
            if (verticalSpeed > 0) {
                this.scene.cameras.main.shake(300, 0.0003 * verticalSpeed);
            }
        }
    }

    /**
     * handles when it receives a left move event.
     */
    private handleLeftMove(): void {
        this.leftMove = true;
    }

    /**
     * handles when it receives a right move event.
     */
    private handleRightMove(): void {
        this.rightMove = true;
    }

    /**
     * handles when it receives a jump move event.
     */
    private handleJumpMove(): void {
        this.jumpMove = true;
    }
}
