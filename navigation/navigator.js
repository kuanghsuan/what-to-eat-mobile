import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"; 
import {Text, Icon} from 'react-native'
import React from "react";
import styles from "../assets/styles/index";
// import { Platform } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MatchesScreen from "../screens/MatchesScreen";


const TinderNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: HomeScreen,
      navigationOptions: {
      },
    },
    Matches: {
      screen: MatchesScreen,
      navigationOptions: {},
    },
    Chat: {
      screen: MessagesScreen,
      navigationOptions: {},
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {},
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#7444C0",
      inactiveTintColor: "#363636",
      labelStyle: {
        fontSize: 14,
        textTransform: "uppercase",
        paddingTop: 10,
      },
      style: {
        backgroundColor: "#FFF",
        borderTopWidth: 0,
        paddingVertical: 30,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: { height: 0, width: 0 },
      },
    },
  }
);




export default createAppContainer(TinderNavigator);