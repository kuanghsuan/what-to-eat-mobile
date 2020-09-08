import "react-native-gesture-handler";

import { Animated, Easing } from "react-native";

import DetailScreen from "../screens/DetailScreen";
//Screens
import HomeScreen from "../screens/HomeScreen";
import SetupScreen from "../screens/Circle";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
//Package
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const Stack = createSharedElementStackNavigator();

const config = {
  config: {
    duration: 190,
    easing: Easing.bezier(0.77, -0.03, 0.1, 1.02),
    timing: Animated.timing,
    useNativeDriver: true,
  },
};

const MainNavigator = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="TagScreen" component={SetupScreen} /> */}
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={(navigation) => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
            transitionSpec: {
              open: config,
              close: config,
            },
          })}
          sharedElementsConfig={(route) => {
            const { data } = route.params;
            return [
              {
                id: `item.${data.id}.image`,
                animation: "move",
                resize: "clip",
                align: "center-top",
              },
              {
                id: `item.${data.id}.name`,
                animation: "fade",
                resize: "clip",
                align: "left-center",
              },
              {
                id: `item.${data.id}.description`,
                animation: "fade",
                resize: "clip",
                align: "left-center",
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
