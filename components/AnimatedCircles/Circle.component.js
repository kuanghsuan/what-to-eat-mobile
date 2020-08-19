import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";


export const circleDiameter = 110;
const circleRadius = circleDiameter / 2;

export const Circle = ({ translateX, translateY, title }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Animated.View
      style={{
        ...styles.circle,
        opacity: isSelected ? "0.5" : "1",
        transform: [{ translateX }, { translateY }],
      }}
    >
      <TouchableOpacity onPress={() => setIsSelected((pre) => !pre)}>
        <Text style={{ ...styles.text }}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleRadius,
    backgroundColor: "#74BCB8",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
