/**
 * Animation Manager creates all the animations to be used by the sprites.
 */
export class AnimationManager {
    /**
     * Creates the animations for the game objects so that they are only created once
     */
    constructor(scene: Phaser.Scene) {
        this.createCoinAnimation(scene);
    }

    /**
     * Sets up the coin animation
     *
     * @param scene - the scene to add the animation to
     */
    private createCoinAnimation(scene: Phaser.Scene): void {
        scene.anims.create({
            frameRate: 10,
            frames: scene.anims.generateFrameNames("sprites", {
                start: 1,
                end: 6,
                prefix: "gold_",
            }),

            key: "coinSpin",
            repeat: -1,
        });
    }
}
