public class Square {
    private Mine mine;



    private boolean checked = false;

    private int amountOfAdjacentMines = 0;

    public Square(Mine mine) {
        this.mine = mine;
    }

    public Square() {

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
        if (this.mine == null) {
            if (amountOfAdjacentMines == 0) {
                return "";
            }
            return "" + amountOfAdjacentMines;
        }
        //There is a mine
        return "" + mine;
    }
    public void setChecked(boolean checked) {
        this.checked = checked;
    }
    public boolean isChecked() {
        return checked;
    }
}
