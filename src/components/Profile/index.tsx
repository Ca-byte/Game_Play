import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.username}>Caroline</Text>
      </View>
      <Text style={styles.message}>Today is your lucky day!</Text>
    </View>
  );
}
