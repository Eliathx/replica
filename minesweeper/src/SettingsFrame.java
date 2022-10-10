import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SettingsFrame implements ActionListener {
   
    private JTextField mineAmountInput = new JTextField(2);
    private JTextField boardSizeInput = new JTextField(2);
    private JButton saveButton = new JButton("Save");

    public SettingsFrame() {
        JFrame settingsFrame = new JFrame();
        JPanel settingsPanel = new JPanel();

        settingsPanel.add(boardSizeInput);
        settingsPanel.add(mineAmountInput);
        settingsPanel.add(saveButton);
        saveButton.addActionListener(this);

        settingsFrame.setLayout(new FlowLayout());
        settingsFrame.pack();

        settingsFrame.add(settingsPanel);
        settingsFrame.setVisible(true);

    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if(e.getSource()==saveButton){
          //  Integer.parseInt(boardSizeInput.getText(), Integer.parseInt(mineAmountInput.getText()))

        }
    }
}
