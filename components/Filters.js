import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const Filters = ({ openModal }) => {
  return (
    <TouchableOpacity style={styles.filters} onPress={openModal}>
      <Text style={styles.filtersText}>
        <Icon name="filter" /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
