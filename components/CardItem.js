import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import Icon from "./Icon";
import React from "react";
import styles from "../assets/styles";
import cardItemStyle from "../assets/styles/CardItemStyle";
import TouchableScale from "react-native-touchable-scale";
import { SharedElement } from "react-navigation-shared-element";

const CardItem = (props) => {
  const { navigation, data, imageUrl } = props;
  const description = data.categories.map((category) => category.title + " ");
  return (
    <View style={cardItemStyle.containerCardItem}>
      <SharedElement id={`item.${data.id}.image`}>
        <Image
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={{ height: "100%", width: "100%" }}
        />
      </SharedElement>

      <View style={cardItemStyle.nameCardItem}>
        <TouchableScale
          activeScale={0.9}
          tension={50}
          friction={7}
          useNativeDriver
          onPress={() => navigation.navigate("DetailScreen", { data: data })}
        >
          {data.name && (
            <SharedElement id={`item.${data.id}.name`}>
              <Text style={cardItemStyle.nameTextCardItem}>{data.name}</Text>
            </SharedElement>
          )}
          {description && (
            <SharedElement id={`item.${data.id}.description`}>
              <Text style={cardItemStyle.descriptionCardItem}>
                {description}
              </Text>
            </SharedElement>
          )}
        </TouchableScale>
      </View>
    </View>
  );
};

export default CardItem;
