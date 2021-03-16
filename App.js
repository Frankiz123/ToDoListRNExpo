import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { styles } from "./utils/AppStyle";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [issVisible, setIssVisible] = useState(false);

  const addGoal = (goalTitle) => {
    setGoal((goal) => [
      ...goal,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIssVisible(false);
  };

  const delgoal = (goalId) => {
    setGoal((goal) => {
      return goal.filter((val) => val.id !== goalId);
    });
  };

  const setVisibleval = () => {
    setIssVisible(true);
  };
  const onCancel = () => {
    setIssVisible(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={setVisibleval} />
      <GoalInput
        onAddGoal={addGoal}
        issVisible={issVisible}
        onCancel={onCancel}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goal}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={delgoal}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
