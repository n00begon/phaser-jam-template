import { LoadingBar } from "./LoadingBar";
import * as WebFontLoader from "webfontloader";
import { GameSettings } from "../utilities/GameSettings";

/**
 * Preloader scene loads all the assets for the main game
 */
export class Preloader extends Phaser.Scene {
    private static readonly ASSET_DIRECTORY = "./assets";

    /**
     * The constructor sets the scene ID
     */
    public constructor() {
        super("Preloader");
    }

    /**
     * Preload adds the loading bar and loads the assets
     */
    public preload(): void {
        this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, "logo");
        new LoadingBar(this);

        this.loadSpriteSheets();
        this.loadAudio();
        this.loadJSON();
        this.loadFonts();
    }

    /**
     * When the preloader has finished it transitions to the main scene
     */
    public create(): void {
        this.scene.start("Instructions");
    }

    /**
     * Loads the sprite sheets into the atlas
     */
    private loadSpriteSheets(): void {
        const spritesheets = ["sprites", "background"];
        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/spritesheets/`);

        for (const sheet of spritesheets) {
            this.load.atlas(sheet, `${sheet}.png`, `${sheet}.json`);
        }
    }

    /**
     * Loads the audio files
     */
    private loadAudio(): void {
        const audioFiles = ["Arpent", "powerUp4"];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/audio/`);

        for (const audioFile of audioFiles) {
            this.load.audio(audioFile, `${audioFile}.mp3`);
        }
    }

    /**
     * Loads the json for the physics shapes
     */
    private loadJSON(): void {
        const jsonFiles = ["physicsShapes"];

        this.load.setPath(`${Preloader.ASSET_DIRECTORY}/json/`);

        for (const json of jsonFiles) {
            this.load.json(json, `${json}.json`);
        }
    }

    /**
     * Loads the webfonts.
     */
    private loadFonts(): void {
        WebFontLoader.load({
            google: {
                families: [GameSettings.DISPLAY_FONT],
            },
        });
    }
}
