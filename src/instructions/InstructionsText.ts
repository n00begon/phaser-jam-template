import { GameSettings } from "../utilities/GameSettings";
import { TypewriterText } from "../utilities/text/TypewriterText";
import { InstructionsEventsManager } from "./InstructionsEventsManager";
export class InstructionsText {
    private textList = new Array<TypewriterText>(2);
    private countdown: number;

    constructor(scene: Phaser.Scene) {
        this.countdown = GameSettings.INSTRUCTIONS_SCENE_TIME;
        const top = 200;
        const wait = 200;
        const defaultHeight = 960;
        const scale = scene.game.canvas.height / defaultHeight;
        let order = 0;

        this.textList.push(
            new TypewriterText(
                scene,
                "Instructions",
                (top - 60) / defaultHeight,
                wait * order++,
                GameSettings.LARGE_FONT_SIZE * scale,
                InstructionsEventsManager,
            ),
        );

        this.textList.push(
            new TypewriterText(
                scene,
                "Use Touch, Mouse, Gamepad, ArrowKeys\nor WASD to move Toasty",
                (top + 60) / defaultHeight,
                wait * order++,
                GameSettings.MEDIUM_FONT_SIZE * scale,
                InstructionsEventsManager,
            ),
        );

        this.textList.push(
            new TypewriterText(
                scene,
                "Eat all the coins",
                (top + 190) / defaultHeight,
                wait * order++,
                GameSettings.MEDIUM_FONT_SIZE * scale,
                InstructionsEventsManager,
            ),
        );

        this.textList.push(
            new TypewriterText(
                scene,
                "Click to play",
                (top + 600) / defaultHeight,
                wait * (order + 1),
                GameSettings.SMALL_FONT_SIZE * scale,
                InstructionsEventsManager,
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
