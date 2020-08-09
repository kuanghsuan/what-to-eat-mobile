import React from "react";
import "react-native-gesture-handler";
import { Text, View, StyleSheet } from "react-native";

//Package
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import MyHomeScreen from "../screens/MyHomeScreen";
import DetailScreen from "../screens/DetailScreen";

const Stack = createSharedElementStackNavigator();

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
        <Stack.Screen name="MyHomeScreen" component={MyHomeScreen} />
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
          })}
          sharedElementsConfig={(route) => {
            const { data } = route.params;
            return [
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
