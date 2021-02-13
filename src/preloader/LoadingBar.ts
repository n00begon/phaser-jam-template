/**
 * Loading bar creates a loading bar which fills as assets are loaded.
 */
export class LoadingBar {
    private static readonly PROGRESS_BOX_COLOR = new Phaser.Display.Color(220, 220, 220).color;
    private static readonly PROGRESS_BAR_COLOR = new Phaser.Display.Color(214, 48, 116).color;
    private static readonly BOX_WIDTH = 700;
    private static readonly BOX_HEIGHT = 50;
    private static readonly BAR_OFFSET = 10;

    /**
     * Creates a new loading bar which has a box color and a bar color.
     * @param scene - the scene to add the loading bar graphics to.
     */
    public constructor(scene: Phaser.Scene) {
        const progressBar = scene.add.graphics();
        const progressBox = scene.add.graphics();
        progressBox.fillStyle(LoadingBar.PROGRESS_BOX_COLOR, 0.8);
        progressBox.fillRect(
            scene.sys.canvas.width / 2 - LoadingBar.BOX_WIDTH / 2,
            (scene.sys.canvas.height / 3) * 2 - LoadingBar.BOX_HEIGHT / 2,
            LoadingBar.BOX_WIDTH,
            LoadingBar.BOX_HEIGHT,
        );

        // When progress has been made loading the assets the loading bar is updated.
        scene.load.on("progress", (progress: number) => {
            progressBar.fillStyle(LoadingBar.PROGRESS_BAR_COLOR, 1);
            progressBar.fillRect(
                scene.sys.canvas.width / 2 - LoadingBar.BOX_WIDTH / 2 + LoadingBar.BAR_OFFSET,
                (scene.sys.canvas.height / 3) * 2 - LoadingBar.BOX_HEIGHT / 2 + LoadingBar.BAR_OFFSET,
                (LoadingBar.BOX_WIDTH - LoadingBar.BAR_OFFSET * 2) * progress,
                LoadingBar.BOX_HEIGHT - LoadingBar.BAR_OFFSET * 2,
            );
        });
    }
}
