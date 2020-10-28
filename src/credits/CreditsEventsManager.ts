/**
 * CreditsEventsManager is the credits's instance of an EventEmitter to ensure there are no collisions
 * with other even emitters
 */
export const CreditsEventsManager = new Phaser.Events.EventEmitter();
