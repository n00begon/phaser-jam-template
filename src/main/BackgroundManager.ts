export class BackgroundManager {
    /**
     * Adds the parallax background to the scene
     */
    constructor(scene: Phaser.Scene) {
        const background = scene.add.image(
            scene.sys.canvas.width / 2,
            (scene.sys.canvas.height / 8) * 5,
            "background",
            "backgroundHill",
        );
        background.setDepth(-1); // Depth -1 to ensure it is behind the gameplay
        background.setScrollFactor(0.2); // A scroll factor lower than one means it moves slower as the camera moves giving it a distant look

        const sky = scene.add.image(
            scene.sys.canvas.width / 2,
            (scene.sys.canvas.height / 8) * 5,
            "background",
            "backgroundEmpty",
        );
        sky.setDepth(-2);
        sky.setScrollFactor(0.05);
        sky.setScale(1.5);
    }
}
