import { GameSettings } from "../utilities/GameSettings";
import { FadeText } from "../utilities/text/FadeText";
import { EndEventsManager } from "./EndEventsManager";
export class EndText {
    private textList = new Array<FadeText>(2);
    private countdown: number;

    constructor(scene: Phaser.Scene) {
        this.countdown = GameSettings.END_SCENE_TIME;
        const top = 200;
        const wait = 100;
        const defaultHeight = 960;
        const scale = scene.game.canvas.height / defaultHeight;
        let order = 0;
        this.textList.push(
            new FadeText(
                scene,
                "You ate all the coins!",
                (top - 60) / defaultHeight,
                wait * order++,
                GameSettings.LARGE_FONT_SIZE * scale,
                EndEventsManager,
            ),
        );

        this.textList.push(
            new FadeText(
                scene,
                "Click to play again",
                (top + 600) / defaultHeight,
                wait * (order + 1),
                GameSettings.SMALL_FONT_SIZE * scale,
                EndEventsManager,
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
