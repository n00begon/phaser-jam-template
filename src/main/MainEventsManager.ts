/**
 * MainEventsManager is the game's instance of an EventEmitter to ensure there are no collisions
 * with other even emitters
 */
export const MainEventsManager = new Phaser.Events.EventEmitter();
