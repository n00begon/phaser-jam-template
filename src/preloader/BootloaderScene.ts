/**
 * Boot loader is the initial scene to load any assets used during the preloader
 */
export class Bootloader extends Phaser.Scene {
    private static readonly ASSET_DIRECTORY = "./assets";

    /**
     * Creates an instance of bootloader setting the scene name
     */
    public constructor() {
        super("Bootloader");
    }

    /**
     * Loads the logo image to display on the preloading scene
     */
    public preload(): void {
        this.load.image("logo", `${Bootloader.ASSET_DIRECTORY}/images/logo.png`);
    }

    /**
     * When the logo image has finished loading it starts the preloader scene.
     */
    public create(): void {
        this.scene.start("Preloader");
    }
}
