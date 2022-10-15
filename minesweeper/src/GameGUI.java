import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.*;
import java.util.ArrayList;

/*
 * Minesweeper by Eliath Velasco
 * https://github.com/Eliathx/replica/tree/main/minesweeper
 * */

public class GameGUI implements ActionListener {
    private final Board board = new Board();
    private final ArrayList<Coordinate> alreadyCheckedPositions = new ArrayList<>();
    private final JFrame frame = new JFrame("Minesweeper");
    private final JButton[][] buttonsArray = new JButton[board.getSize()][board.getSize()];
    private final JButton restartButton = new JButton("↻");

    public GameGUI() {
        //Setting frame icon
        ImageIcon iconImg = new ImageIcon("minesweeper/src/minesweeper-frame-icon.png");
        frame.setIconImage(iconImg.getImage());

        restartButton.addActionListener(this);

        JSplitPane splitPane = new JSplitPane();
        frame.add(splitPane);

        splitPane.setOrientation(JSplitPane.VERTICAL_SPLIT);
        splitPane.setDividerLocation(50);

        JPanel topPanel = new JPanel();
        topPanel.setLayout(new GridBagLayout());

        JLabel label1 = new JLabel("Size: " + board.getSize() + " x " + board.getSize());
        topPanel.add(label1);
        JLabel label2 = new JLabel(" | Mines: " + board.getAmountOfMines() + "   ");
        topPanel.add(label2);

        topPanel.add(restartButton);

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
                //Add or remove flag to a tile
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


    public Coordinate createButtonCoords(Object sourceButton) {

        for (int i = 0; i < board.getSize(); i++) {
            for (int j = 0; j < board.getSize(); j++) {
                if (buttonsArray[i][j] == sourceButton) {
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

    public void disableAdjacentTiles(int y, int x) {
        int[] dr = {-1, 1, 0, 0};
        int[] dc = {0, 0, 1, -1};

        for (int i = 0; i < 4; i++) {
            if (y + dr[i] < 0 || x + dc[i] < 0 || y + dr[i] >= board.getSize() || x + dc[i] >= board.getSize()) {
                continue;
            }
            int newY = y + dr[i];
            int newX = x + dc[i];
            buttonsArray[newY][newX].setEnabled(false);
            buttonsArray[newY][newX].setText(board.getValueofTile(newY, newX));

            if (!deepContainsCoord(alreadyCheckedPositions, new Coordinate(newX, newY))) {
                alreadyCheckedPositions.add(new Coordinate(newX, newY));
                if (board.getTiles()[newY][newX].getAmountOfAdjacentMines() == 0) {
                    disableAdjacentTiles(newY, newX);
                }
            }
        }
    }

    private void checkForEmptyTile(int currentButtonY, int currentButtonX) {
        if (board.getTiles()[currentButtonY][currentButtonX].getAmountOfAdjacentMines() != 0 && !deepContainsCoord(alreadyCheckedPositions, new Coordinate(currentButtonX, currentButtonY))) {
            alreadyCheckedPositions.add(new Coordinate(currentButtonX, currentButtonY));

        }
        if (board.getTiles()[currentButtonY][currentButtonX].getAmountOfAdjacentMines() == 0) {
            disableAdjacentTiles(currentButtonY, currentButtonX);

        }
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == restartButton) {
            frame.setVisible(false);
            new GameGUI();
        } else {
            int currentButtonY = createButtonCoords(e.getSource()).getY();
            int currentButtonX = createButtonCoords(e.getSource()).getX();

            JButton currentButton = buttonsArray[currentButtonY][currentButtonX];

            //Show mines positions when either a mine is clicked or there are no more clickable tiles.
            if (board.getTiles()[currentButtonY][currentButtonX].hasMine() ||
                    alreadyCheckedPositions.size() >= (board.getSize() * board.getSize()) - (board.getAmountOfMines() + 1)) {
                endGame();

            }
            currentButton.setEnabled(false);
            currentButton.setText(board.getValueofTile(currentButtonY, currentButtonX));

            checkForEmptyTile(currentButtonY, currentButtonX);

        }
    }

    private void endGame() {
        for (int i = 0; i < board.getTiles().length; i++) {
            for (int j = 0; j < board.getTiles().length; j++) {
                buttonsArray[i][j].setEnabled(false);
                buttonsArray[i][j].setText(board.getValueofTile(i, j));
            }
        }
    }


    public static void main(String[] args) {
        new GameGUI();
    }
}
