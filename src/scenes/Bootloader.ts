export class Bootloader extends Phaser.Scene {
    private static readonly ASSET_DIRECTORY = "./assets";

    public constructor() {
        super("Bootloader");
    }

    public preload(): void {
        this.load.image("logo", `${Bootloader.ASSET_DIRECTORY}/images/logo.png`);
    }

    public create(): void {
        this.scene.start("Preloader");
    }
}
