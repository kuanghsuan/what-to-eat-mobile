import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "./Icon";
import React from "react";
import { SharedElement } from "react-navigation-shared-element";
import Tags from "react-native-tags";
import TouchableScale from "react-native-touchable-scale";
import cardItemStyle from "../assets/styles/CardItemStyle";
import styles from "../assets/styles";

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
          useNativeDriver={true}
          onPress={() => navigation.navigate("DetailScreen", { data: data })}
        >
          {data.name && (
            <SharedElement id={`item.${data.id}.name`}>
              <Text style={cardItemStyle.nameTextCardItem}>{data.name}</Text>
            </SharedElement>
          )}
          {description && (
            <SharedElement id={`item.${data.id}.description`}>
              <View style={{ marginLeft: 20 }}>
                <Tags
                  initialTags={description.slice(0, 2)}
                  readonly={true}
                  tagContainerStyle={myStyles.tags}
                  tagTextStyle={myStyles.tags}
                />
              </View>
            </SharedElement>
          )}
        </TouchableScale>
      </View>
    </View>
  );
};
const myStyles = StyleSheet.create({
  resTitle: {
    fontFamily: "Roboto-Medium",
    color: "#000000",
    fontSize: 24,
  },

  tags: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#20B2AA",
  },
});

export default CardItem;
