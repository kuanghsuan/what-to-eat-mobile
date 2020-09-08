import { useMemo }  from 'react';
import Animated from "react-native-reanimated";
import { circleDiameter } from './Circle.component';
import TAGS from '../../data/Tags';
const {
  Value,
  cond,
  clockRunning,
  startClock,
  set,
  block,
  Clock,
  add,
  multiply,
  sub,
  sqrt,
  lessThan,
  divide,
  useCode
} = Animated;

var numCircles = TAGS.length;
const random = (min, max) => Math.random() * (max - min) + min;

const useSetup = (dimensions) => {
  const circles = useMemo(() => {
    const { width, height } = dimensions;
    const diagonal = Math.hypot(width, height);
    const diagonalHalf = diagonal / 2;
    const circles = [];

    const angle = (2 * Math.PI) / numCircles;
    for (let i = 0; i < numCircles; i++) {
      const randomOffsetAngle = random(-angle , angle );
      const randomOffsetDistance = random(0, circleDiameter);

      const distance = diagonalHalf + circleDiameter + randomOffsetDistance;
      const currentAngle = angle * i + randomOffsetAngle;
      const x = Math.sin(currentAngle) * distance;
      const y = Math.cos(currentAngle) * distance;

      circles.push({
        x: new Value(x),
        y: new Value(y),
        title: TAGS[i].imageUrl,
      });
    }
    return circles;
  }, [dimensions]);

  return circles;
};

const useDraw = (circles) => {
  const nativeCode = useMemo(() => {
    const clock = new Clock();

    const nativeCode = [cond(clockRunning(clock), 0, startClock(clock)), clock];

    // gravity. We push cirlces to 0, 0
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];

      nativeCode.push(set(circle.x, add(circle.x, multiply(circle.x, -0.04))));
      nativeCode.push(set(circle.y, add(circle.y, multiply(circle.y, -0.04))));
    }

    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      
      if (circle.x == 0 || circle.y == 0) {

        nativeCode.push(
          set(circle.x, add(circle.x, multiply(circle.x, 0.1)))
        );
        nativeCode.push(set(circle.y, add(circle.y, multiply(circle.y, 0.1))));
      }
      
    }

    // collision detection
    for (let i = 0; i < circles.length; i++) {
      for (let j = i; j < circles.length; j++) {
        const circleA = circles[i];
        const circleB = circles[j];

        const dx = sub(circleB.x, circleA.x);
        const dy = sub(circleB.y, circleA.y);
        const distanceBetweenCenters = multiply (sqrt(
          add(multiply(dx, dx), multiply(dy, dy))
        ), 0.8);

        const areOverlapping = lessThan(distanceBetweenCenters, circleDiameter);

        const overlapDistance = sub(circleDiameter, distanceBetweenCenters);
        const percentOverlap = divide(overlapDistance, circleDiameter);
        const halfPercent = multiply(percentOverlap, 0.8);

        nativeCode.push(
          cond(areOverlapping, [
            set(circleA.x, sub(circleA.x, multiply(dx, halfPercent))),
            set(circleA.y, sub(circleA.y, multiply(dy, halfPercent))),
            set(circleB.x, add(circleB.x, multiply(dx, halfPercent))),
            set(circleB.y, add(circleB.y, multiply(dy, halfPercent))),
          ])
        );
      }
    }


    return block(nativeCode);
  }, [circles]);

  useCode(() => nativeCode, [nativeCode]);
};

export const useGravityAnimation = (dimensions) => {
  const circles = useSetup(dimensions);
  useDraw(circles);
  
  return circles;
};
