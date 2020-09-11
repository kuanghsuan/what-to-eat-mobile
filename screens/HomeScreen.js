import { AntDesign, Feather, Foundation } from "@expo/vector-icons";
//constants
import { CATEGORY, MINIMUM_RATING, PRICE } from "../utils/constants";
import { Dimensions, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
// data
import {
  createPreference as _createPreference,
  fetchRestaurantsData,
} from "../utils/api_utils";

// components
import CardItem from "../components/CardItem";
import City from "../components/City";
import FilterModal from "../components/FilterModal";
import Filters from "../components/Filters";
import OverlayLabel from "../components/OverlayLabels"; // nope and yes!
import Swiper from "react-native-deck-swiper";
//package
import TouchableScale from "react-native-touchable-scale";
// styles
import { WHITE } from "../assets/styles/index";
import buttonStyles from "../assets/styles/ButtonStyle";
import cardItemStyle from "../assets/styles/CardItemStyle";
import styles from "../assets/styles";

const USER_ID = 6;

const HomeScreen = (props) => {
  let data = [];
  const restaurantId = useRef(null);
  const { navigation } = props;

  const [restaurantsData, setRestaurantsData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterData, setFilterData] = useState({
    [CATEGORY]: [],
    distance: 2,
  });
  const swiperRef = useRef();

  const createPreference = (userId, restaurantId, type) =>
    _createPreference(userId, restaurantId, type).then((response) => {
      fetchRestaurantsData(USER_ID, 1).then((res) => {
        if (res) {
          setRestaurantsData(restaurantsData.concat(res.data.next_restaurants));
        }
      });
      return response;
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
    if (restaurantsData.length === 0) {
      fetchRestaurantsData(USER_ID, 2).then((res) => {
        if (res) {
          setRestaurantsData(res.data.next_restaurants);
        }
      });
    }
  }, [setRestaurantsData]);

  useEffect(() => {
    if (props.route.params) {
      if (restaurantId.current !== props.route.params.restaurantId) {
        restaurantId.current = props.route.params.restaurantId;
        const actionType = props.route.params.actionType;
        if (actionType) {
          switch (actionType) {
            case "DISLIKE":
              swiperRef.current.swipeLeft();
              break;
            case "NEUTRAL":
              swiperRef.current.swipeTop();
              break;
            case "LIKE":
              swiperRef.current.swipeRight();
              break;
          }
        }
      }
    }
  });

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
        <FilterModal
          modalVisible={modalVisible}
          selectTag={selectTag}
          deSelectTag={deSelectTag}
          data={filterData}
          closeModal={() => {
            setModalVisible(false);
          }}
        />
        <Swiper
          ref={(swiper) => (swiperRef.current = swiper)}
          cardVerticalMargin={hp(0.9)}
          cardHorizontalMargin={(DIMENSION_WIDTH - cardWidth) / 2.0}
          backgroundColor={WHITE}
          cards={restaurantsData}
          disableBottomSwipe={true}
          infinite={true}
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
                  marginTop: hp(30),
                  marginLeft: wp(-30),
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
                  marginTop: hp(30),
                  marginLeft: wp(30),
                },
              },
            },
            top: {
              title: "NEUTRAL",
              element: (
                <OverlayLabel label="NEUTRAL" color="#2980B9" direction="TOP" />
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
                  marginTop: hp(330),
                  marginLeft: wp(70),
                },
              },
            },
          }}
          stackScale={5}
          renderCard={(restaurant) => {
            return (
              restaurant && (
                <View style={cardItemStyle.cardContainer}>
                  <TouchableScale
                    activeScale={0.9}
                    tension={50}
                    friction={7}
                    useNativeDriver={true}
                    onPress={() => {
                      navigation.navigate("DetailScreen", {
                        data: restaurantsData,
                        restaurantId: restaurant.id,
                      });
                    }}
                  >
                    <CardItem
                      restaurant={restaurant}
                      imageUrl={restaurant.image_url}
                    />
                  </TouchableScale>
                </View>
              )
            );
          }}
          //function to be called when tapping a card. it receives the tapped card index
          //function : next photo
          onTapCard={(cardIndex) => {
            console.log(`tapping card ${cardIndex}`);
          }}
          onSwipedRight={(cardIndex) => {
            createPreference(USER_ID, restaurantsData[cardIndex].id, "LIKE");
          }}
          onSwipedLeft={(cardIndex) =>
            createPreference(USER_ID, restaurantsData[cardIndex].id, "DISLIKE")
          }
          onSwipedTop={(cardIndex) =>
            createPreference(USER_ID, restaurantsData[cardIndex].id, "NEUTRAL")
          }
        ></Swiper>
      </View>
      <View style={buttonStyles.buttonContainer}>
        <TouchableScale
          activeScale={0.9}
          onPressIn={() => (swiperRef ? swiperRef.current.swipeLeft() : null)}
        >
          <AntDesign name="closecircleo" size={hp(50)} color="#20B2AA" />
        </TouchableScale>
        <TouchableScale
          activeScale={0.9}
          onPressIn={() => (swiperRef ? swiperRef.current.swipeTop() : null)}
        >
          <Feather name="meh" size={hp(50)} color="#20B2AA" />
        </TouchableScale>
        <TouchableScale
          activeScale={0.9}
          onPressIn={() => (swiperRef ? swiperRef.current.swipeRight() : null)}
        >
          <Foundation name="heart" size={hp(50)} color="#20B2AA" />
        </TouchableScale>
      </View>
    </View>
  );
};
export default HomeScreen;
