import { LoadingBar } from "../preloader/LoadingBar";

export class Preloader extends Phaser.Scene {
    private static readonly ASSET_DIRECTORY = "./assets";

    public constructor() {
        super("Preloader");
    }

    public preload(): void {
        this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "logo");
        new LoadingBar(this);

        this.loadSpriteSheets();
        this.loadAudio();
        this.loadJSON();
    }

    public create(): void {
        this.scene.start("Main");
    }

    private loadSpriteSheets(): void {
        const spritesheets = ["sheet"];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/spritesheets/`);

        for (const sheet of spritesheets) {
            this.load.atlas(sheet, `${sheet}.png`, `${sheet}.json`);
        }
    }

    private loadAudio(): void {
        const audioFiles = ["Arpent"];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/audio/`);

        for (const audioFile of audioFiles) {
            this.load.audio(audioFile, `${audioFile}.mp3`);
        }
    }

    private loadJSON(): void {
        const jsonFiles = ["physicsShapes"];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/json/`);

        for (const json of jsonFiles) {
            this.load.json(json, `${json}.json`);
        }
    }
}
