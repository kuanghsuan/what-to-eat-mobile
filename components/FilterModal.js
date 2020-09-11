import { Dimensions, Text, TouchableOpacity, View } from "react-native";
//initial data
// import { Distances} from "../data/Filters";
import React, { Fragment, useState } from "react";

import ALL_TAG from "../data/Tags";
//constants
import { CATEGORY } from "../utils/constants";
import { DISTANCES } from "../data/Filters";
import Modal from "react-native-modal";
import Slider from "@react-native-community/slider";
import Tags from "react-native-tags";
import TouchableScale from "react-native-touchable-scale";
import styles from "../assets/styles";

const FilterModal = ({
  modalVisible,
  closeModal,
  data,
  selectTag,
  deSelectTag,
}) => {
  const [distance, setDistance] = useState(data.distance);
  const isSelected = (type, value) => data[type].includes(value);
  const categories = ALL_TAG.map((tag) => tag.tag_name);
  const screenHeight = Dimensions.get("window").height;
  const makeTags = (data, type) => {
    return (
      <Fragment>
        <Text style={styles.filterModalSectionTitles}>{type}</Text>
        <View
          style={{
            marginTop: 10,
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
                  <Text
                    style={[
                      styles.tags,
                      isSelected(type, tag) && styles.selectedTagText,
                    ]}
                  >
                    {tag}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Fragment>
    );
  };
  return (
    <Modal
      style={styles.frame}
      flex={1}
      alignItems="center"
      justifyContent="center"
      marginTop={screenHeight * 0.3}
      marginHorizontal={0}
      marginBottom={0}
      isVisible={modalVisible}

    >
      <View style={{ flex: 1, marginTop: 40 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            minHeight: 10,
            maxHeight: 80,
          }}
        >
          <TouchableScale
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
            activeScale={0.9}
            onPress={closeModal}
          >
            <Text style={styles.filteModalTextSmall} marginTop={5} padding={0}>
              Cancel
            </Text>
          </TouchableScale>
          <Text style={styles.filterModalSectionTitles}>Filter</Text>
          <TouchableScale
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
            activeScale={0.9}
            onPress={closeModal}
          >
            <Text style={styles.filteModalTextSmall} marginTop={5} padding={0}>
              Save
            </Text>
          </TouchableScale>
        </View>
        <View style={{ marginLeft: 30 }}>
          {makeTags(categories, CATEGORY)}
          <Text style={styles.filterModalSectionTitles} marginTop={30}>
            Distance
          </Text>
          <Slider
            maximumValue={4}
            minimumValue={0}
            marginRight={46}
            value={distance}
            minimumTrackTintColor="#2D2D2D"
            maximumTrackTintColor="#CFCFCF"
            thumbTintColor="#2D2D2D"
            step={1}
            onValueChange={(distance) => setDistance(distance)}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              minHeight: 10,
              maxHeight: 80,
              marginRight: 46,
            }}
          >
            {DISTANCES.map((distance) => (
              <Text style={styles.filteModalTextSmall}>{distance}</Text>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
