import CardStack, { Card } from "react-native-card-stack-swiper";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import CardItem from "../components/CardItem";
import City from "../components/City";
import Filters from "../components/Filters";
import Swiper from "react-native-deck-swiper";
import { fetchRestaurantsData } from "../utils/api_utils";
import Swiper from "react-native-deck-swiper";

// import styles from "../assets/styles";

const Home = () => {
  // 1. have cards as state
  // 2. on Home component load, fetch cards and set state
  const [restaurantsData, setRestaurantsData] = useState([]);
  const DIMENSION_WIDTH = Dimensions.get("window").width;
  const DIMENSION_HEIGHT = Dimensions.get("window").height;
  useEffect(() => {
    fetchRestaurantsData(6, 2).then((res) => {
      setRestaurantsData(res.data.next_restaurants);
    });
  }, [setRestaurantsData]);

  return (
    <View
      // source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      {/* <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View> */}
      <View style={styles.container}>
        <Swiper
          cards={restaurantsData}
          renderCard={(restaurant) => {
            return (
              restaurant && (
                <CardItem
                  imageUrl={restaurant.image_url}
                  name={restaurant.name}
                  description={"description"}
                  matches={restaurant.rating * 20.0}
                />
              )
            );
          }}
          onSwiped={(cardIndex) => {
            console.log(cardIndex);
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          cardIndex={0}
          backgroundColor={"#4FD0E9"}
          stackSize={3}
        ></Swiper>
      </View>
    </View>
  );
};

export default Home;
