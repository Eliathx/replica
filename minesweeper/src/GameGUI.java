import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;
import java.util.Arrays;

public class GameGUI implements ActionListener {
    private final Board board = new Board();
    private final ArrayList<Coordinate> alreadyCheckedPositions = new ArrayList<>();
    JButton[][] buttonsArray = new JButton[board.getSize()][board.getSize()];

    public GameGUI() {

        JFrame frame = new JFrame("Test");

        JSplitPane splitPane = new JSplitPane();
        frame.add(splitPane);

        splitPane.setOrientation(JSplitPane.VERTICAL_SPLIT);
        splitPane.setDividerLocation(50);

        JPanel topPanel = new JPanel();
        topPanel.setLayout(new GridBagLayout());

        JLabel label1 = new JLabel("Lorem");
        topPanel.add(label1);
        JLabel label2 = new JLabel(" Ipsum");
        topPanel.add(label2);

        JPanel gamePanel = new JPanel();
        gamePanel.setBorder(new EmptyBorder(10, 10, 10, 10));
        gamePanel.setLayout(new GridLayout(board.getSize(), board.getSize()));

        frame.setPreferredSize(new Dimension(50 * board.getSize(), 50 * board.getSize()));
        frame.pack();
        frame.add(topPanel);
        frame.add(gamePanel);

        splitPane.setTopComponent(topPanel);
        splitPane.setBottomComponent(gamePanel);
        for (int i = 0; i < board.getSize(); i++) {
            for (int j = 0; j < board.getSize(); j++) {
                JButton button = new JButton();
                button.addActionListener(this);
                button.addMouseListener(new MouseAdapter() {
                    public void mouseClicked(MouseEvent e) {
                        if (e.getButton() == MouseEvent.BUTTON3 && button.isEnabled()) {
                            if (button.getText().equals("⚑"))
                                button.setText("");
                            else {
                                button.setText("⚑");
                            }
                        }
                    }
                });
                buttonsArray[i][j] = button;
                gamePanel.add(button);
            }
        }
        frame.setVisible(true);

    }

    public Coordinate createButtonCoords(Object botonFuente) {

        for (int i = 0; i < board.getSize(); i++) {
            for (int j = 0; j < board.getSize(); j++) {
                if (buttonsArray[i][j] == botonFuente) {
                    return new Coordinate(j, i);
                }
            }
        }
        return null;
    }

    public boolean deepContainsCoord(ArrayList<Coordinate> list, Coordinate item) {
        for (Coordinate c : list) {
            if (c.equals(item)) {
                return true;
            }
        }
        return false;
    }

    public void disableAdjacentSquares(int y, int x) {
        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, 1, -1};
        alreadyCheckedPositions.add(new Coordinate(x, y));
        for (int i = 0; i < 4; i++) {
            if (y + dr[i] < 0 || x + dc[i] < 0 || y + dr[i] >= board.getSize() || x + dc[i] >= board.getSize()) {
                continue;
            }
            int newY = y + dr[i];
            int newX = x + dc[i];
            buttonsArray[newY][newX].setEnabled(false);
            buttonsArray[newY][newX].setText(board.getValueofSquare(newY, newX));

            if ((!deepContainsCoord(alreadyCheckedPositions, new Coordinate(newX, newY))
                    && board.getSquares()[newY][newX].getAmountOfAdjacentMines() == 0)) {
                alreadyCheckedPositions.add(new Coordinate(newX, newY));
                disableAdjacentSquares(newY, newX);
            } else {
                System.out.println("HII");
            }

        }
        System.out.println(Arrays.deepToString(alreadyCheckedPositions.toArray()));
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        int currentButtonY = createButtonCoords(e.getSource()).getY();
        int currentButtonX = createButtonCoords(e.getSource()).getX();

        JButton currentButton = buttonsArray[currentButtonY][currentButtonX];
        if (board.getSquares()[currentButtonY][currentButtonX].hasMine()) {
            for (int i = 0; i < board.getSquares().length; i++) {
                for (int j = 0; j < board.getSquares().length; j++) {
                    buttonsArray[i][j].setEnabled(false);
                    buttonsArray[i][j].setText(board.getValueofSquare(i, j));
                }
            }
        }
        currentButton.setEnabled(false);
        currentButton.setText(board.getValueofSquare(currentButtonY, currentButtonX));
        //alreadyCheckedPositions.add(new Coordinate(currentButtonX,currentButtonY));
        if (board.getSquares()[currentButtonY][currentButtonX].getAmountOfAdjacentMines() != 0 &&
                deepContainsCoord(alreadyCheckedPositions, new Coordinate(currentButtonX, currentButtonY))) {
            alreadyCheckedPositions.add(new Coordinate(currentButtonX, currentButtonY));
            System.out.println(Arrays.deepToString(alreadyCheckedPositions.toArray()));
        }
        if (board.getSquares()[currentButtonY][currentButtonX].getAmountOfAdjacentMines() == 0) {

            disableAdjacentSquares(currentButtonY, currentButtonX);
        }


    }

    public static void main(String[] args) {
        new GameGUI();
    }
}
