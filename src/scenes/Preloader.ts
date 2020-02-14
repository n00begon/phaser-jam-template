import { LoadingBar } from "../preloader/LoadingBar";

export class Preloader extends Phaser.Scene {
    private static readonly ASSET_DIRECTORY = "./assets";

    public preload(): void {
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
        const jsonFiles = ["temp"];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/json/`);

        for (const json of jsonFiles) {
            this.load.json(json, `${json}.json`);
        }
    }
}
