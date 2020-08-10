const { View, Text, Image } = require("react-native");

import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
// package
const { SharedElement } = require("react-navigation-shared-element");
// style
import cardItemStyle from "../assets/styles/CardItemStyle";

const DetailScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const { data } = props.route.params;
  console.log("detailScreen");
  return (
    <View>
      <SharedElement id={`item.${data.id}.image`}>
        <Image
          source={{ uri: data.image_url }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: height - 484,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </SharedElement>
      <SharedElement id={`item.${data.id}.name`}>
        <Text style={cardItemStyle.nameTextCardItem}>{data.name}</Text>
      </SharedElement>
    </View>
  );
};

export default DetailScreen;
