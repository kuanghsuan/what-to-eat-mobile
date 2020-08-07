import React from "react";
import { View, Text } from "react-native";
import { string } from "prop-types";
import cardItemStyle from "../assets/styles/CardItemStyle";

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
  } else {
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
  }
};

OverlayLabel.propTypes = {
  label: string.isRequired,
  color: string.isRequired,
};

export default OverlayLabel;
