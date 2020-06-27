/**
 * Audio manager controls adding audio to the scene and the background music
 */
export class AudioManager {
    /**
     * Adds the audio to the scene and starts the background music
     */
    constructor(scene: Phaser.Scene) {
        scene.sound.stopAll();
        scene.sound.add("powerUp4");
        const backgroundMusic = scene.sound.add("Arpent");
        backgroundMusic.play({
            loop: true,
            volume: 0.3,
        });
    }
}
