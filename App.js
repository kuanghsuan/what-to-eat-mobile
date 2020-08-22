import React, { useState } from "react";
import { YellowBox } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import MainNavigator from "./screens/MainNavigation";

const fetchFonts = () => {
  return Font.loadAsync({
    tinderclone: require("./assets/fonts/tinderclone.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    // "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

YellowBox.ignoreWarnings([
  "Animated: `useNativeDriver` was not specified.",
  "Animated.event now requires a second argument for options",
  "Warning: componentWillReceiveProps has been renamed",
]);

export default function App() {
  console.log("entry");
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return <MainNavigator />;
}
