import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "./Icon";
import React from "react";
import styles from "../assets/styles";
import cardItemStyle from "../assets/styles/cardItem";

const CardItem = (props) => {
  const {
    actions,
    description,
    imageUrl,
    name,
    onPressLeft,
    onPressRight,
  } = props;

  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={cardItemStyle.containerCardItem}
    >
      {name && (
        <View style={cardItemStyle.nameCardItem}>
          <Text style={cardItemStyle.nameTextCardItem}>{name}</Text>
          {description && (
            <Text style={cardItemStyle.descriptionCardItem}>{description}</Text>
          )}
        </View>
      )}

      {/* ACTIONS is for bottom bar later(like/dislike/nutural...) */}
      {/* {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.star}>
              <Icon name="star" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Text style={styles.like}>
              <Icon name="like" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}
          >
            <Text style={styles.dislike}>
              <Icon name="dislike" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Text style={styles.flash}>
              <Icon name="flash" />
            </Text>
          </TouchableOpacity>
        </View>
      )} */}
    </ImageBackground>
  );
};

export default CardItem;
