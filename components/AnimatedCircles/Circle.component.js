import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Animated from "react-native-reanimated";


export const circleDiameter = 110;
const circleRadius = circleDiameter / 2;

export const Circle = ({ translateX, translateY, title }) => {
  // const [isSelected, setIsSelected] = useState(false);
  const [imageIdx, setImageIdx] = useState(0);
 
  return (
    <Animated.View
      style={{
        ...styles.circle,
        // opacity: isSelected ? "0.5" : "1",
        transform: [{ translateX }, { translateY }],
      }}
    >
      <TouchableOpacity onPress={() => setImageIdx((pre) => (pre + 1) % 2)}>
        {/* <Text style={{ ...styles.text }}>{title}</Text> */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={title[imageIdx]}
          />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  circle: {
    position: "absolute",
    // width: circleDiameter,
    // height: circleDiameter,
    // borderRadius: circleRadius,
    // backgroundColor: "#F8D37A",
    // justifyContent: "center",
    // alignItems: "center",
    // borderColor: "black",
    // borderWidth: 4,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleRadius,
    borderWidth: 4,
    borderColor: "black",
    overflow: "hidden",
    
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
