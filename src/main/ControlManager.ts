import { MainEventsManager } from "./MainEventsManager";
/**
 * ControlManager collects interactions with the player and emits them as events.
 * This lets things that need to end up as the same action be mapped to different keys
 */
export class ControlManager {
    private jumpKey: Phaser.Input.Keyboard.Key;
    private jumpKey2: Phaser.Input.Keyboard.Key;
    private leftKey: Phaser.Input.Keyboard.Key;
    private rightKey: Phaser.Input.Keyboard.Key;
    private leftKey2: Phaser.Input.Keyboard.Key;
    private rightKey2: Phaser.Input.Keyboard.Key;
    private touchX = 0;
    private touchY = 0;
    private currentPointer!: Phaser.Input.Pointer | null;
    private scene: Phaser.Scene;

    /**
     * Record all the keys which the user can use
     */
    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.jumpKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.jumpKey2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.leftKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.leftKey2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.rightKey2 = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        scene.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            this.currentPointer = pointer;
        });

        scene.input.on("pointerup", () => {
            this.currentPointer = null;
        });
    }

    update(): void {
        if (this.leftKey.isDown || this.leftKey2.isDown) {
            MainEventsManager.emit("leftMove");
        }

        if (this.rightKey.isDown || this.rightKey2.isDown) {
            MainEventsManager.emit("rightMove");
        }

        if (this.jumpKey.isDown) {
            MainEventsManager.emit("jumpMove");
        }

        if (this.currentPointer?.isDown) {
            if (this.currentPointer.x < this.scene.cameras.main.displayWidth / 2) {
                MainEventsManager.emit("leftMove");
            } else {
                MainEventsManager.emit("rightMove");
            }

            if (this.currentPointer.y < this.scene.cameras.main.displayHeight / 2) {
                MainEventsManager.emit("jumpMove");
            }
        }
    }
}
