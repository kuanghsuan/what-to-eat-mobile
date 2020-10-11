import * as Font from "expo-font";

import React, { useState } from "react";

import { AppLoading } from "expo";
import MainNavigator from "./screens/MainNavigation";
import { YellowBox } from "react-native";

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
