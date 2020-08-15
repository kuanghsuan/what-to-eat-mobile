import React from "react";
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
  return (
    <Modal isVisible={modalVisible}>
      <View style={{ flex: 1, marginTop: 90 }}>
        <Text style={{ color: "white" }}>{CATEGORY}</Text>
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
            renderTag={({ tag, index }) => (
              <TouchableOpacity
                key={`${tag}-${index}`}
                onPress={() =>
                  isSelected(CATEGORY, tag)
                    ? deSelectTag(CATEGORY, tag)
                    : selectTag(CATEGORY, tag)
                }
              >
                <View
                  style={[
                    styles.filterTagContainer,
                    isSelected(CATEGORY, tag) && styles.selectedTag,
                  ]}
                >
                  <Text style={styles.tags}>{tag}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={{ color: "white" }}>{PRICE}</Text>
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
            renderTag={({ tag, index }) => (
              <TouchableOpacity
                key={`${tag}-${index}`}
                onPress={() =>
                  isSelected(PRICE, tag)
                    ? deSelectTag(PRICE, tag)
                    : selectTag(PRICE, tag)
                }
              >
                <View
                  style={[
                    styles.filterTagContainer,
                    isSelected(PRICE, tag) && styles.selectedTag,
                  ]}
                >
                  <Text style={styles.tags}>{tag}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={{ color: "white" }}>{MINIMUM_RATING}</Text>
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
            renderTag={({ tag, index }) => (
              <TouchableOpacity
                key={`${tag}-${index}`}
                onPress={() =>
                  isSelected(MINIMUM_RATING, tag)
                    ? deSelectTag(MINIMUM_RATING, tag)
                    : selectTag(MINIMUM_RATING, tag)
                }
              >
                <View
                  style={[
                    styles.filterTagContainer,
                    isSelected(MINIMUM_RATING, tag) && styles.selectedTag,
                  ]}
                >
                  <Text style={styles.tags}>{tag}</Text>
                </View>
              </TouchableOpacity>
            )}
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

export default FilterModal;
