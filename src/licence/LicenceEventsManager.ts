/**
 * LicenceEventsManager is the Licence's instance of an EventEmitter to ensure there are no collisions
 * with other even emitters
 */
export const LicenceEventsManager = new Phaser.Events.EventEmitter();
