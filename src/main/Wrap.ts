export class Wrap {
    /**
     * Performs the calculations for an object to move off one side of the screen and wrap around to the other.
     * This has been separated out into its own class as an example for the Jest tests.
     *
     * @param currentX - the current x position of the body to wrap
     * @param gameWidth - the width of the game
     */
    public static screenWrap(currentX: number, gameWidth: number): number {
        if (currentX < 0) {
            return gameWidth + currentX;
        }

        if (currentX > gameWidth) {
            return currentX - gameWidth;
        }

        return currentX;
    }
}
