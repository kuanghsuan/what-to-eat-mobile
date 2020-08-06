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

const CardItem = (props) => {
  const {
    actions,
    description,
    imageUrl,
    name,
    onPressLeft,
    onPressRight,
    status,
    variant,
  } = props;

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: "#363636",
      fontSize: variant ? 15 : 30,
    },
  ];

  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.containerCardItem}
    >
      {name && (
        <View style={styles.nameCardItem}>
          <Text style={styles.nameTextCardItem}>{name}</Text>
          {description && (
            <Text style={styles.descriptionCardItem}>{description}</Text>
          )}
        </View>
      )}

      {/* ACTIONS is for bottom bar later(like/dislike/nutural...) */}
      {actions && (
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
      )}
    </ImageBackground>
  );
};

export default CardItem;
