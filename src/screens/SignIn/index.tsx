import React from "react";
import { Text, View, Image } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./style";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Schedule all {"\n"}your games smoothly.
        </Text>
        <Text style={styles.subtitle}>
          Create groups to play your favorites {"\n"} games with your friends.
        </Text>
        <ButtonIcon title="Login with Discord " onPress={handleSignIn} />
      </View>
    </View>
  );
}
