export class Wrap {
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
