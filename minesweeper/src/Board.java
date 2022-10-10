import java.util.*;

public class Board {
    public  int size = 10;
    public int amountOfMines =10;
    private final Square[][] squares = new Square[size][size];

    public Board() {
       
        //Fill the squares that have mines
        ArrayList<Integer[]> alreadyUsedPositions = new ArrayList<>();
        if (amountOfMines >= (size * size)) {
            System.out.println("Higher number of mines than squares");
        } else {
            for (int i = 0; i < amountOfMines; i++) {
                int x = (int) (Math.random() * size);
                int y = (int) (Math.random() * size);
                if (deepContains(alreadyUsedPositions, new Integer[]{x, y})) {
                    i -= 1;
                    //System.out.println("Error");
                } else {
                    squares[y][x] = new Square(new Mine());
                    alreadyUsedPositions.add(new Integer[]{x, y});
                }
            }
           
        }

        //Fill in the other blank squares
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (squares[i][j] == null) {
                    squares[i][j] = new Square();
                }
            }
        }
        for (int i = 0; i < amountOfMines; i++) {
            checkAdjacentTiles(alreadyUsedPositions.get(i)[1], alreadyUsedPositions.get(i)[0]);

        }
        //System.out.println(this);
    }

    public boolean deepContains(List<Integer[]> list, Integer[] probe) {
        for (Integer[] element : list) {
            if (Arrays.deepEquals(element, probe)) {
                return true;
            }
        }
        return false;
    }

    //Looking at adjacent tiles
    public void checkAdjacentTiles(int YpositionToCheck, int XpositionToCheck) {

        for (int dx = (YpositionToCheck > 0 ? -1 : 0); dx <= (YpositionToCheck < size - 1 ? 1 : 0);
             ++dx) {
            for (int dy = (XpositionToCheck > 0 ? -1 : 0);
                 dy <= (XpositionToCheck < size - 1 ? 1 : 0); ++dy) {
                if (dx != 0 || dy != 0) {
                    squares[YpositionToCheck + dx][XpositionToCheck + dy].addAmountOfAdjacentMines();
                }
            }
        }

    }
    public int getSize(){
        return size;
    }
    public String getValueofSquare(int i, int j){
        return ""+squares[i][j];
    }
    @Override
    public String toString() {
        return Arrays.deepToString(squares).replace("], ", "]\n").replace("[[", "[").replace("]]", "]");
    }

    public void setSettings(int size, int amountOfMines) {
        this.size = size;
        this.amountOfMines = amountOfMines;
    }
    public Square[][] getSquares() {
        return squares;
    }

}
