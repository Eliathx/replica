import java.util.*;

public class Board {
    public static final int SIZE = 10;
    public static final int AMOUNT_OF_MINES = 9;
    private static final Square[][] squares = new Square[SIZE][SIZE];

    public Board() {
        //Fill the squares that have mines
        ArrayList<Integer[]> alreadyUsedPositions = new ArrayList<>();
        if (AMOUNT_OF_MINES >= (SIZE * SIZE)) {
            System.out.println("Higher number of mines than squares");
        } else {
            for (int i = 0; i < AMOUNT_OF_MINES; i++) {
                int x = (int) (Math.random() * SIZE);
                int y = (int) (Math.random() * SIZE);
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
        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                if (squares[i][j] == null) {
                    squares[i][j] = new Square();
                }
            }
        }
        for (int i = 0; i < AMOUNT_OF_MINES; i++) {
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

        for (int dx = (YpositionToCheck > 0 ? -1 : 0); dx <= (YpositionToCheck < SIZE - 1 ? 1 : 0);
             ++dx) {
            for (int dy = (XpositionToCheck > 0 ? -1 : 0);
                 dy <= (XpositionToCheck < SIZE - 1 ? 1 : 0); ++dy) {
                if (dx != 0 || dy != 0) {
                    squares[YpositionToCheck + dx][XpositionToCheck + dy].addAmountOfAdjacentMines();
                }
            }
        }

    }
    public int getSize(){
        return SIZE;
    }
    public String getValueofSquare(int i, int j){
        return ""+squares[i][j];
    }
    @Override
    public String toString() {
        return Arrays.deepToString(squares).replace("], ", "]\n").replace("[[", "[").replace("]]", "]");
    }

    public Square[][] getSquares() {
        return squares;
    }
}
