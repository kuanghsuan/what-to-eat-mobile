import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "react-native-action-button";
import { useGravityAnimation } from "./useGravityAnimation.hook";
import { Circle } from "./Circle.component";

const S = StyleSheet.create({
  flex: { flex: 1 },
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});



export function AnimatedCircles() {
  const [viewDimensions, setViewDimensions] = useState(undefined);
  const handleLayout = useCallback((event) => {
    var { width, height } = event.nativeEvent.layout;
    setViewDimensions({ width, height });
  }, []);

  const isCanvasReady = viewDimensions !== undefined;

  return (
    <View style={S.flex} onLayout={handleLayout}>
      {isCanvasReady && <AnimatedCirclesInner dimensions={viewDimensions} />}
      
    </View>
  );
}

export function AnimatedCirclesInner({ dimensions }) {
    
  const circles = useGravityAnimation(dimensions);

  return (
    <View style={S.wrap}>
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
      <ActionButton buttonColor="rgba(231,76,60,1)" />
    </View>
  );
}
