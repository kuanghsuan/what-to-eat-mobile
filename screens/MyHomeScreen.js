import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";

import CardItem from "../components/CardItem";
import City from "../components/City";
import Filters from "../components/Filters";
import Swiper from "react-native-deck-swiper";
import { fetchRestaurantsData } from "../utils/api_utils";
import { WHITE } from "../assets/styles/index";
import OverlayLabel from "../components/OverlayLabels";
import styles from "../assets/styles";
import cardItemStyle from "../assets/styles/CardItemStyle";
import MyIconButton from "../components/IconButton";
import buttonStyles from "../assets/styles/ButtonStyle";

const MyHomeScreen = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  useEffect(() => {
    fetchRestaurantsData(6, 2).then((res) => {
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
        <Filters />
      </View>
      <View>
        <Swiper
          cardVerticalMargin={20}
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
                    imageUrl={restaurant.image_url}
                    name={restaurant.name}
                    description={restaurant.categories.map(
                      (category) => category.title + " "
                    )}
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
        <MyIconButton name="close" backgroundColor="white" color="#A29FBE" />
        <MyIconButton name="camera" backgroundColor="white" color="#A29FBE" />
        <MyIconButton name="heart" backgroundColor="white" color="#FF636B" />
      </View>
    </View>
  );
};

export default MyHomeScreen;
