import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../../screens/Avatar";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/Ca-byte.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Hello,</Text>
          <Text style={styles.username}>Caroline</Text>
        </View>
        <Text style={styles.message}>Today is your lucky day!</Text>
      </View>
    </View>
  );
}
