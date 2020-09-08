import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useGravityAnimation } from "./useGravityAnimation.hook";
import { Circle } from "./Circle.component";

export function AnimatedCircles() {
  const [viewDimensions, setViewDimensions] = useState(undefined);
  const handleLayout = useCallback((event) => {
    var { width, height } = event.nativeEvent.layout;
    setViewDimensions({ width, height });
  }, []);

  const isCanvasReady = viewDimensions !== undefined;

  return (
    <View style={styles.flex} onLayout={handleLayout}>
      {isCanvasReady && <AnimatedCirclesInner dimensions={viewDimensions} />}
    </View>
  );
}

export function AnimatedCirclesInner({ dimensions }) {
  const circles = useGravityAnimation(dimensions);

  return (
    <View style={styles.wrap}>
      <View style={styles.title}>
        <Text style={styles.text}>Choose 3 Interest</Text>
      </View>

      {circles.map((p, index) => {
        return (
          <Circle
            key={index}
            translateX={p.x}
            translateY={p.y}
            title={p.title}
          />
        );
      })}
      {/* <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>I'm Done</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.text}>I'm Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#F8D37A",
  },

  title: {
    position: "absolute",
    top: 80,
  },

  text: {
    fontWeight: "bold",
    fontSize: 28,
    color: "black",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 100,
  },

  button: {
    flex: 1,
    borderRadius: 50,
    margin: 20,
    padding: 20,
    paddingLeft: 80,
    paddingRight: 80,
    backgroundColor: "#F29B00",
    borderRadius: 9,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    padding: 20,
    paddingLeft: 80,
    paddingRight: 80,
    bottom: 80,
 
    borderRadius: 50,
    margin: 2,
    justifyContent: "center",
    backgroundColor: "#F29B00",
  },
});
