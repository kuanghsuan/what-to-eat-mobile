import React from "react";
import styles from "../assets/styles";

import {Image, Text, TouchableOpacity} from "react-native";
import Icon from "./Icon";

const Filters = ({ openModal }) => {
  return (
    <TouchableOpacity onPress={openModal}>
        <Image style={styles.siftIcon} source={require('../assets/images/icon_sift.png')}/>
    </TouchableOpacity>
  );
};

export default Filters;
