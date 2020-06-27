import "phaser";
import { Bootloader } from "./preloader/BootloaderScene'";
import { Preloader } from "./preloader/PreloaderScene";
import { Main } from "./main/MainScene";
import { UI } from "./main/UIScene";
import { Credits } from "./credits/CreditsScene";

const config: Phaser.Types.Core.GameConfig = {
    width: 1640,
    height: 960,

    parent: "canvas",
    scene: [Bootloader, Preloader, Main, UI, Credits],
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
