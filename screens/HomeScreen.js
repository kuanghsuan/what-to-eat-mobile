import React, { useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import City from "../components/City";
import Filters from "../components/Filters";
import CardItem from "../components/CardItem";
import styles from "../assets/styles";
import { fetchRestaurantsData } from "../utils/api_utils";

const Home = () => {
  // 1. have cards as state
  // 2. on Home component load, fetch cards and set state
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    fetchRestaurantsData(6, 2).then((res) => {
      setRestaurantsData(res.data.next_restaurants);
    });
  }, [setRestaurantsData]);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>
        {restaurantsData.length > 0 && (
          <CardStack
            loop={true}
            verticalSwipe={true}
            renderNoMoreCards={() => null}
            ref={(swiper) => (this.swiper = swiper)}
          >
            {restaurantsData.map((restaurant) => (
              <Card key={restaurant.id}>
                <CardItem
                  imageUrl={restaurant.image_url}
                  name={restaurant.name}
                  description={"description"}
                  matches={restaurant.rating * 20.0}
                  actions
                  onPressLeft={() => this.swiper.swipeLeft()}
                  onPressRight={() => this.swiper.swipeRight()}
                />
              </Card>
            ))}
          </CardStack>
        )}
      </View>
    </ImageBackground>
  );
};

export default Home;
