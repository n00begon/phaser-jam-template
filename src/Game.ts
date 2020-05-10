import "phaser";
import "phaser";
import { Bootloader } from "./scenes/Bootloader";
import { Preloader } from "./scenes/Preloader";
import { Main } from "./scenes/Main";

const config: Phaser.Types.Core.GameConfig = {
    width: 1640,
    height: 960,

    parent: "canvas",
    scene: [Bootloader, Preloader, Main],
    type: Phaser.AUTO,

    physics: {
        default: "matter",
        matter: {
            debug: true, // This displays the physics boxes
            gravity: {
                x: 0,
                y: 1,
            },
        },
    },
};

new Phaser.Game(config);
