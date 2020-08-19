import React, { Fragment } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Tags from "react-native-tags";
import Modal from "react-native-modal";
import TouchableScale from "react-native-touchable-scale";
import { AntDesign } from "@expo/vector-icons";
import styles from "../assets/styles";
//initial data
import { Ratings, Prices } from "../data/Filters";
import ALL_TAG from "../data/Tags";
//constants
import { PRICE, MINIMUM_RATING, CATEGORY } from "../utils/constants";

const FilterModal = ({
  modalVisible,
  closeModal,
  data,
  selectTag,
  deSelectTag,
}) => {
  const isSelected = (type, value) => data[type].includes(value);
  const categories = ALL_TAG.map((tag) => tag.tag_name);
  const makeTags = (data, type) => {
    return (
      <Fragment>
        <Text style={{ color: "white" }}>{type}</Text>
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
            initialTags={data}
            readonly={true}
            renderTag={({ tag, index }) => (
              <TouchableOpacity
                key={`${tag}-${index}`}
                onPress={() =>
                  isSelected(type, tag)
                    ? deSelectTag(type, tag)
                    : selectTag(type, tag)
                }
              >
                <View
                  style={[
                    styles.filterTagContainer,
                    isSelected(type, tag) && styles.selectedTag,
                  ]}
                >
                  <Text style={styles.tags}>{tag}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Fragment>
    );
  };
  return (
    <Modal isVisible={modalVisible}>
      <View style={{ flex: 1, marginTop: 90 }}>
        {makeTags(categories, CATEGORY)}
        {makeTags(Prices, PRICE)}
        {makeTags(Ratings, MINIMUM_RATING)}
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

export default FilterModal;
