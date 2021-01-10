/**
 * EndEventsManager is the End's instance of an EventEmitter to ensure there are no collisions
 * with other even emitters
 */
export const EndEventsManager = new Phaser.Events.EventEmitter();
