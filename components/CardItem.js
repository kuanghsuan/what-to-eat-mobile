import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";

import Icon from "./Icon";
import React from "react";
import styles from "../assets/styles";

const CardItem = (props) => {
  const {
    actions,
    description,
    imageUrl,
    matches,
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
      style={styles.containerCardItem}>
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            {name}
          </Text>
        </View>
      )}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}
      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === "Online" ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
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
