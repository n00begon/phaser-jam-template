/**
 * EventsManager is the game's instance of an EventEmitter to ensure there are no collisions
 * with other even emitters
 */
export const EventsManager = new Phaser.Events.EventEmitter();
