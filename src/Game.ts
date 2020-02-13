import "phaser";
import "phaser"
import { Preloader } from "./scenes/Preloader";
import { Main } from "./scenes/Main";

const config: Phaser.Types.Core.GameConfig = {
    width: 960,
    height: 540,

    parent: "canvas",
    scene: [
        Preloader,
        Main,
    ],
    type: Phaser.AUTO,

    physics: {
        default: "matter",
        matter: {
            debug: false, // This displays the physics boxes
            gravity: {
                x: 0,
                y: 1,
            },
        },
    },
};

new Phaser.Game(config);
