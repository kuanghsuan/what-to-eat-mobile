import React from "react";
import "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";
import { Platform, Animated, Easing, Dimensions } from "react-native";

//Package
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";

//Screens
import MyHomeScreen from "../screens/MyHomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createSharedElementStackNavigator();

const config = {
  config: {
    duration: 80,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
    useNativeDriver: true,
  },
};

const Appp = ({ navigation }) => {
  console.log("animate");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyHomeScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="MyHomeScreen"
          component={MyHomeScreen}
          options={(navigation) => ({
            transitionSpec: {
              open: config,
              close: config,
            },
          })}
        />
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
                animation: "move",
                resize: "clip",
                align: "left-center",
              },
              {
                id: `item.${data.id}.description`,
                animation: "move",
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

export default Appp;
