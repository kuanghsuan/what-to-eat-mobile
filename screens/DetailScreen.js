const { View, Text } = require("react-native");
const { SharedElement } = require("react-navigation-shared-element");
import React, { useEffect, useState } from "react";

const DetailScreen = (props) => {
  const { data } = props.route.params;
  return (
    <View>
      <SharedElement id={`item.${data.id}.description`}>
        <Text style={{ color: "white", fontSize: 16 }}>{data.description}</Text>
      </SharedElement>
    </View>
  );
};

export default DetailScreen;
