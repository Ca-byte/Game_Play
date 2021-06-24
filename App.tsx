import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/Routes";
import { Background } from "./src/components/Background";

import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from "@expo-google-fonts/rajdhani";

export default function App() {
  const [fontsIsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsIsLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  );
}
