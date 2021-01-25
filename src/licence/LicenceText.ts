import { GameSettings } from "../utilities/GameSettings";
import { PlainText } from "../utilities/text/PlainText";
import { LicenceEventsManager } from "./LicenceEventsManager";
export class LicenceText {
    private textList = new Array<PlainText>(3);
    private countdown: number;

    constructor(scene: Phaser.Scene) {
        this.countdown = GameSettings.END_SCENE_TIME;
        const top = 200;
        const gap = 100;
        const wait = 100;
        const defaultHeight = 960;
        const scale = scene.game.canvas.height / defaultHeight;
        let order = 0;
        let count = 0;

        this.textList.push(
            new PlainText(
                scene,
                "Asset Licences",
                (top - 150 + gap * count++) / defaultHeight,
                wait * order++,
                GameSettings.LARGE_FONT_SIZE * scale,
                LicenceEventsManager,
            ),
        );

        this.textList.push(
            new PlainText(
                scene,
                "Music Arpent from freepd.com by Kevin MacLeod",
                (top + gap * count++) / defaultHeight,
                wait * order++,
                GameSettings.MEDIUM_FONT_SIZE * scale,
                LicenceEventsManager,
            ),
        );

        this.textList.push(
            new PlainText(
                scene,
                "Sound Effects and Background from https://kenney.nl/",
                (top + gap * count) / defaultHeight,
                wait * order,
                GameSettings.MEDIUM_FONT_SIZE * scale,
                LicenceEventsManager,
            ),
        );
    }

    public update(): boolean {
        return this.countdown-- <= 0;
    }
}
