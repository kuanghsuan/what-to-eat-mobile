import { AntDesign, Feather, Foundation } from "@expo/vector-icons";
import {
  Button,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

// components
import CardItem from "../components/CardItem";
import City from "../components/City";
import Filters from "../components/Filters";
import MyIconButton from "../components/IconButton";
import OverlayLabel from "../components/OverlayLabels"; // nope and yes!
import Swiper from "react-native-deck-swiper";
import FilterModal from "../components/FilterModal";
//package
import TouchableScale from "react-native-touchable-scale";
// styles
import { WHITE } from "../assets/styles/index";
import buttonStyles from "../assets/styles/ButtonStyle";
import cardItemStyle from "../assets/styles/CardItemStyle";
// data
import { fetchRestaurantsData } from "../utils/api_utils";
import styles from "../assets/styles";

//constants
import { PRICE, MINIMUM_RATING, CATEGORY } from "../utils/constants";

const HomeScreen = ({ navigation }) => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    [CATEGORY]: [],
    [PRICE]: [],
    [MINIMUM_RATING]: [],
  });
  const selectTag = (type, value) => {
    const newState = Object.assign({}, filterData);
    if (type === MINIMUM_RATING) {
      newState[type] = [value];
    } else {
      newState[type].push(value);
    }
    setFilterData(newState);
  };
  const deSelectTag = (type, value) => {
    const newState = Object.assign({}, filterData);
    if (type === MINIMUM_RATING) {
      newState[type] = [];
    } else {
      const index = newState[type].indexOf(value);
      newState[type].splice(index, 1);
    }
    setFilterData(newState);
  };
  useEffect(() => {
    fetchRestaurantsData(6, 5).then((res) => {
      if (res) {
        setRestaurantsData(res.data.next_restaurants);
      }
    });
  }, [setRestaurantsData]);

  const cardHeight = cardItemStyle.containerCardItem.height;
  const cardWidth = cardItemStyle.containerCardItem.width;
  const DIMENSION_WIDTH = Dimensions.get("window").width;
  return (
    <View style={styles.bg}>
      <View style={styles.top}>
        <City />
        <Filters openModal={() => setModalVisible(true)} />
      </View>
      <View>
        <Swiper
          cardVerticalMargin={0.9}
          cardHorizontalMargin={(DIMENSION_WIDTH - cardWidth) / 2.0}
          backgroundColor={WHITE}
          cards={restaurantsData}
          infinite={true}
          swipeAnimationDuration={10}
          cardIndex={0}
          stackSize={3}
          stackSeparation={0}
          animateOverlayLabelsOpacity
          overlayOpacityVerticalThreshold={cardHeight / 100}
          overlayOpacityHorizontalThreshold={cardWidth / 100}
          inputOverlayLabelsOpacityRangeX={[
            -cardWidth / 3,
            -cardWidth / 100,
            0,
            cardWidth / 100,
            cardWidth / 3,
          ]}
          inputOverlayLabelsOpacityRangeY={[
            -cardHeight / 4,
            -cardHeight / 100,
            0,
            cardHeight / 100,
            cardHeight / 4,
          ]}
          overlayLabels={{
            left: {
              title: "NOPE",
              element: (
                <OverlayLabel label="NOPE" color="#E5566D" direction="LEFT" />
              ),
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "YES",
              element: (
                <OverlayLabel label="YES!" color="#4CCC93" direction="RIGHT" />
              ),
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
          stackScale={2}
          renderCard={(restaurant) => {
            return (
              restaurant && (
                <View style={cardItemStyle.cardContainer}>
                  <CardItem
                    navigation={navigation}
                    data={restaurant}
                    imageUrl={restaurant.image_url}
                  />
                </View>
              )
            );
          }}
          //function to be called when tapping a card. it receives the tapped card index
          //function : next photo
          onTapCard={(cardIndex) => {
            console.log(cardIndex);
          }}
        ></Swiper>
      </View>
      <View style={buttonStyles.buttonContainer}>
        <TouchableScale activeScale={0.9}>
          <AntDesign name="closecircleo" size={50} color="#20B2AA" />
        </TouchableScale>
        <TouchableScale activeScale={0.9}>
          <Feather name="meh" size={50} color="#20B2AA" />
        </TouchableScale>
        <TouchableScale activeScale={0.9}>
          <Foundation name="heart" size={50} color="#20B2AA" />
        </TouchableScale>
      </View>
      <FilterModal
        modalVisible={modalVisible}
        selectTag={selectTag}
        deSelectTag={deSelectTag}
        data={filterData}
        closeModal={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};
export default HomeScreen;
