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
  const { navigation, data, description, imageUrl, name } = props;
  console.log("hahahahhaha");
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={cardItemStyle.containerCardItem}
    >
      <View style={cardItemStyle.nameCardItem}>
        <TouchableScale
          activeScale={0.9}
          tension={50}
          friction={7}
          useNativeDriver
        >
          {name && (
            <SharedElement id={`item.${data.id}.name`}>
              <Text style={cardItemStyle.nameTextCardItem}>{name}</Text>
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
      <Button
        title={"touch me!!!!!"}
        onPress={() => navigation.navigate("DetailScreen", { data: data })}
      />
    </ImageBackground>
  );
};

export default CardItem;
