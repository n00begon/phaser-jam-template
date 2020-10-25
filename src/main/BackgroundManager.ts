/**
 * Background manager controls the non interactive background objects
 */
export class BackgroundManager {
    /**
     * Adds the parallax background to the scene
     */
    constructor(scene: Phaser.Scene) {
        const background = scene.add.tileSprite(
            scene.sys.canvas.width / 2,
            700,
            10000,
            780,
            "background",
            "backgroundHill",
        );
        background.setTilePosition(0, 1); // Removes the one pixel line that shows when the camera moves.
        background.setDepth(-1); // Depth -1 to ensure it is behind the gameplay
        background.setScrollFactor(0.2); // A scroll factor lower than one means it moves slower as the camera moves giving it a distant look

        const sky = scene.add.tileSprite(0, (scene.sys.canvas.height / 8) * 4, 4096, 1024, "background", "sky");
        sky.setDepth(-2);
        sky.setScrollFactor(0.05);
        sky.setScale(1.5);
    }
}
