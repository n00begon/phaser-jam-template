/**
 * InstructionsEventsManager is the Instruction's instance of an EventEmitter to ensure there are no collisions
 * with other even emitters
 */
export const InstructionsEventsManager = new Phaser.Events.EventEmitter();
