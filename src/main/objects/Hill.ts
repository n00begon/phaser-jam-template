/**
 * The hill is the static physics shape for Toasty to land on.
 */
export class Hill {
    constructor(scene: Phaser.Scene) {
        const physicsShapes = scene.cache.json.get("physicsShapes");
        const hill = scene.matter.add.image(scene.sys.canvas.width / 2, scene.sys.canvas.height, "sprites", "hill", {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            shape: physicsShapes.hill, //definitions does not have the shape in them
        });
        hill.setStatic(true); // Static because they are not going to move
    }
}
