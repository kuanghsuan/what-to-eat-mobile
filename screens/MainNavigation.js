import "react-native-gesture-handler";

import { Animated, Dimensions, Easing, Platform } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import DetailScreen from "../screens/DetailScreen";
//Screens
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SelectScreen from "../screens/Circle";
//Package
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createStackNavigator } from "react-navigation-stack";

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
  console.log("animate");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {/* <Stack.Screen name="TagScreen" component={SelectScreen} /> */}
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
