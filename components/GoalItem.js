import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../utils/AppStyle";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItemScrollstyle}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
