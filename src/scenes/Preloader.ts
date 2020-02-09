import { LoadingBar } from "../preloader/LoadingBar";

export class Preloader extends Phaser.Scene {
    private static readonly ASSET_DIRECTORY = "./assets";

    public preload() {
        new LoadingBar(this);

        this.loadSpriteSheets();
        this.loadAudio();
        this.loadJSON();
    }

    public create() {
        this.scene.start("Main");
    }

    private loadSpriteSheets() {
        const spritesheets = [
            "sheet",
        ];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/spritesheets/`);

        for (const sheet of spritesheets) {
            this.load.atlas(sheet, `${sheet}.png`, `${sheet}.json`);
        }
    }

    private loadAudio() {
        const audioFiles = [
            "Arpent"
        ]

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/audio/`);

        for (const audioFile of audioFiles) {
            this.load.audio(audioFile, `${audioFile}.mp3`);
        }
    }

    private loadJSON() {
        const jsonFiles = [
            "temp"
        ]

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/json/`);

        for (const json of jsonFiles) {
            this.load.json(json, `${json}.json`);
        }
    }
}
