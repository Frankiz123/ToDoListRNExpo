import React, { useState } from "react";
import { View, TextInput, Button, Modal } from "react-native";
import { styles } from "../utils/AppStyle";

export default function GoalInput(props) {
  const [inputGoal, setInputGoal] = useState("");

  const InputGoalHandler = (goalHandler) => {
    setInputGoal(goalHandler);
  };
  return (
    <Modal animationType="slide" visible={props.issVisible}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textinputstyle}
          placeholder="Enter your Goal"
          onChangeText={InputGoalHandler}
          value={inputGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.btnstyle}>
            <Button
              title="Add Goal"
              onPress={props.onAddGoal.bind(this, inputGoal)}
            />
          </View>
          <View style={styles.btnstyle}>
            <Button title="Cancel" color={"red"} onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
