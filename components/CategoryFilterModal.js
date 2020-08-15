import React from "react";
import styles from "../assets/styles";
import Tags from "react-native-tags";
import { AntDesign } from "@expo/vector-icons";
import ALL_TAG from "../data/Tags";
import { Ratings, Prices } from "../data/Filters";
import TouchableScale from "react-native-touchable-scale";
import { Text, View } from "react-native";
import Modal from "react-native-modal";
const CategoryFilterModal = ({ modalVisible, closeModal }) => {
  const categories = ALL_TAG.map((tag) => tag.tag_name);
  return (
    <Modal isVisible={modalVisible}>
      <View style={{ flex: 1, marginTop: 90 }}>
        <Text style={{ color: "white" }}>Category</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
            shadowColor: "#808080",
            shadowOpacity: 0.1,
          }}
        >
          <Tags
            initialTags={categories}
            readonly={true}
            tagContainerStyle={styles.tagContainer}
            tagTextStyle={styles.tags}
          />
        </View>
        <Text style={{ color: "white" }}>Price</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
            shadowColor: "#808080",
            shadowOpacity: 0.1,
          }}
        >
          <Tags
            initialTags={Prices}
            readonly={true}
            tagContainerStyle={styles.tagContainer}
            tagTextStyle={styles.tags}
          />
        </View>
        <Text style={{ color: "white" }}>Minimum Rating</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
            shadowColor: "#808080",
            shadowOpacity: 0.1,
          }}
        >
          <Tags
            initialTags={Ratings}
            readonly={true}
            tagContainerStyle={styles.tagContainer}
            tagTextStyle={styles.tags}
          />
        </View>
        <TouchableScale
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
          activeScale={0.9}
          onPress={closeModal}
        >
          <AntDesign name="checkcircle" size={50} color="#20B2AA" />
        </TouchableScale>
      </View>
    </Modal>
  );
};

export default CategoryFilterModal;
