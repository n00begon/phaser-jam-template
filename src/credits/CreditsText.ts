import { GameSettings } from "../utilities/GameSettings";
import { FadeText } from "../utilities/text/FadeText";
import { CreditsEventsManager } from "./CreditsEventsManager";
export class CreditsText {
    private textList = new Array<FadeText>(5);
    private countdown: number;

    constructor(scene: Phaser.Scene) {
        this.countdown = GameSettings.END_SCENE_TIME;

        const top = 200;
        const assets = 540;
        const wait = 100;
        const defaultHeight = 960;
        const scale = scene.game.canvas.height / defaultHeight;
        let order = 0;
        let assetsCount = 0;
        this.textList.push(
            new FadeText(
                scene,
                "Phaser Jam Template",
                (top - 60) / defaultHeight,
                wait * order++,
                GameSettings.LARGE_FONT_SIZE * scale,
                CreditsEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                scene,
                "By n00begon",
                (top + 100 * order) / defaultHeight,
                wait * order++,
                80 * scale,
                CreditsEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                scene,
                "github.com/n00begon/phaser-jam-template",
                (assets + 100 * assetsCount++) / defaultHeight,
                wait * order++,
                GameSettings.MEDIUM_FONT_SIZE * scale,
                CreditsEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                scene,
                "Click to play again",
                (assets + 100 * assetsCount + 40) / defaultHeight,
                wait * (order + 1),
                GameSettings.SMALL_FONT_SIZE * scale,
                CreditsEventsManager,
            ),
        );
    }

    public update(): boolean {
        let finished = false;
        this.textList.forEach((displayText) => {
            finished = displayText.update();
        });

        return finished && this.countdown-- <= 0;
    }
}
