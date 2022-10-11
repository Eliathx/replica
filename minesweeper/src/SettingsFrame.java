import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SettingsFrame implements ActionListener {
   //TODO: Add customizable size and amount of mines using a settings frame.
    private JTextField mineAmountInput = new JTextField(2);
    private JTextField boardSizeInput = new JTextField(2);
    private JButton saveChangesButton = new JButton("Save changes");

    public SettingsFrame() {
        JFrame settingsFrame = new JFrame("Settings");
        JPanel settingsPanel = new JPanel();

        settingsPanel.add(boardSizeInput);
        settingsPanel.add(mineAmountInput);
        settingsPanel.add(saveChangesButton);
        saveChangesButton.addActionListener(this);

        settingsFrame.setLayout(new FlowLayout());

        settingsFrame.add(settingsPanel);
        settingsFrame.pack();
        settingsFrame.setVisible(true);

    }

    @Override
    public void actionPerformed(ActionEvent e) {

    }
}
