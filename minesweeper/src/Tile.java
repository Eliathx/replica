public class Tile {
    private Mine mine;
    private int amountOfAdjacentMines = 0;

    public Tile(Mine mine) {
        this.mine = mine;
    }

    public Tile() {
    }

    public int getAmountOfAdjacentMines() {
        return amountOfAdjacentMines;
    }

    public void addAmountOfAdjacentMines() {
        amountOfAdjacentMines += 1;
    }

    public boolean hasMine() {
        return mine != null;
    }

    @Override
    public String toString() {
        //No mine
        if (!hasMine()) {
            if (amountOfAdjacentMines == 0) {
                return "";
            }
            return "" + amountOfAdjacentMines;
        }
        //Has mine
        return "" + mine;
    }
}