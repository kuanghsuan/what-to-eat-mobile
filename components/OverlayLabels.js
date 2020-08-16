import { Text, View } from "react-native";

import React from "react";
import cardItemStyle from "../assets/styles/CardItemStyle";
import { string } from "prop-types";

const OverlayLabel = ({ label, color, direction }) => {
  if (direction === "RIGHT") {
    return (
      <View
        style={[
          cardItemStyle.overlayLabel,
          {
            borderColor: color,
            transform: [{ rotate: "-25deg" }],
          },
        ]}
      >
        <Text style={[cardItemStyle.overlayLabelText, { color }]}>{label}</Text>
      </View>
    );
  };
  if (direction === "LEFT"){
    return (
      <View
        style={[
          cardItemStyle.overlayLabel,
          {
            borderColor: color,
            transform: [{ rotate: "25deg" }],
          },
        ]}
      >
        <Text style={[cardItemStyle.overlayLabelText, { color }]}>{label}</Text>
      </View>
    );
  } else {
    return (
      <View
        style={[
          cardItemStyle.overlayLabel,
          {
            borderColor: color,
            transform: [{ rotate: "9deg" }],
          },
        ]}
      >
        <Text style={[cardItemStyle.overlayLabelText, { color }]}>{label}</Text>
      </View>
    );
  }
};

OverlayLabel.propTypes = {
  label: string.isRequired,
  color: string.isRequired,
};

export default OverlayLabel;
