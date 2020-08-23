import {
  AntDesign,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { hp, wp } from "../utils/sizing_utils";

import CentralStyle from "../assets/styles/index";
import { LinearGradient } from "expo-linear-gradient";
import MapView from "react-native-maps";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SharedElement } from "react-navigation-shared-element";
import { SliderBox } from "react-native-image-slider-box";
import Tags from "react-native-tags";
import TouchableScale from "react-native-touchable-scale";

const DetailScreen = (props) => {
  const { height } = Dimensions.get("window");
  const { navigation } = props;
  const { data, restaurantId } = props.route.params;
  const restaurant = data.find((restaurant) => restaurant.id === restaurantId);
  const description = restaurant.categories.map((category) => category.title);

  const createPreference = (actionType) =>
    navigation.navigate("HomeScreen", {
      restaurantId: restaurantId,
      actionType: actionType,
    });

  return (
    <View style={CentralStyle.bg}>
      <ScrollView>
        <View>
          <SharedElement id={`item.${restaurant.id}.image`}>
            <SliderBox
              images={restaurant.photos}
              resizeMode="cover"
              dotColor="#FFEE58"
              ImageComponentStyle={{
                width: "100%",
                height: height - hp(484),
                borderBottomLeftRadius: hp(20),
                borderBottomRightRadius: hp(20),
              }}
              onCurrentImagePressed={() => navigation.navigate("HomeScreen")}
            />
          </SharedElement>

          <View style={styles.timerContainer}>
            <MaterialCommunityIcons
              name="clock-fast"
              size={hp(24)}
              color="white"
            />
            <Text
              style={{
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: 18,
                left: wp(3),
              }}
            >
              20min
            </Text>
          </View>
          <View style={styles.rating}>
            <Text
              style={{ color: "white", fontSize: hp(20), fontWeight: "bold" }}
            >
              {parseFloat(restaurant.rating).toFixed(1)}
            </Text>
          </View>
        </View>

        <View style={{ padding: hp(16) }}>
          <SharedElement id={`item.${restaurant.id}.name`}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: hp(30),
              }}
            >
              <Text style={styles.resTitle}>{restaurant.name}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "left",
                  paddingTop: hp(5),
                }}
              >
                <Feather name="dollar-sign" size={hp(13)} color="#20B2AA" />
                <Feather name="dollar-sign" size={hp(13)} color="#20B2AA" />
              </View>
            </View>
          </SharedElement>

          <SharedElement id={`item.${restaurant.id}.description`}>
            <View
              style={{
                marginTop: hp(8),
                shadowColor: "#808080",
                shadowOpacity: 0.1,
              }}
            >
              <Tags
                initialTags={description}
                readonly={true}
                tagContainerStyle={styles.tagContainer}
                tagTextStyle={styles.tags}
              />
            </View>
          </SharedElement>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: wp(35),
            paddingVertical: hp(10),
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableScale activeScale={0.9} style={styles.buttonBackground}>
              <Feather name="map-pin" size={hp(30)} color="#fff" />
            </TouchableScale>
            <Text
              style={{ paddingTop: hp(10), fontWeight: "bold", color: "gray" }}
            >
              View Map
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableScale activeScale={0.9} style={styles.buttonBackground}>
              <Feather name="phone-call" size={hp(30)} color="#fff" />
            </TouchableScale>
            <Text
              style={{ paddingTop: hp(10), fontWeight: "bold", color: "gray" }}
            >
              Call
            </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableScale activeScale={0.9} style={styles.buttonBackground}>
              <FontAwesome name="yelp" size={hp(27)} color="#fff" />
            </TouchableScale>
            <Text style={{ paddingTop: 10, fontWeight: "bold", color: "gray" }}>
              Yelp
            </Text>
          </View>
        </View>

        <View style={styles.mapBox}>
          <Text style={{ height: hp(120), width: wp(200) }}>
            This is the restranuts address, see here! i am right here.
          </Text>
          <MapView
            style={styles.mapView}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <LinearGradient
          start={[1, 0.3]}
          end={[1, 1.5]}
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.linearGradient}
        />
        <TouchableScale
          activeScale={0.9}
          onPressIn={() => createPreference("DISLIKE")}
        >
          <AntDesign name="closecircleo" size={hp(50)} color="#20B2AA" />
        </TouchableScale>
        <TouchableScale
          activeScale={0.9}
          onPressIn={() => createPreference("NEUTRAL")}
        >
          <Feather name="meh" size={hp(50)} color="#20B2AA" />
        </TouchableScale>
        <TouchableScale
          activeScale={0.9}
          onPressIn={() => createPreference("LIKE")}
        >
          <Foundation name="heart" size={hp(50)} color="#20B2AA" />
        </TouchableScale>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resTitle: {
    fontFamily: "Roboto-Medium",
    color: "#000000",
    fontSize: hp(24),
  },
  resDescription: {
    color: "#757E90",
    fontSize: hp(16),
    paddingTop: 10, // this is for temp position on the description tags
  },
  tagContainer: {
    backgroundColor: "#20B2AA",
  },
  tags: {
    color: "#FFFFFF",
    fontSize: hp(12),
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "transparent",
    justifyContent: "space-around",
    marginTop: hp(771),
    width: wp(414),
    height: hp(125),
  },
  linearGradient: {
    position: "absolute",
    height: hp(135),
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonBackground: {
    borderColor: "rgba(0,0,0,0.2)",
    shadowColor: "#808080",
    shadowOpacity: 0.3,
    shadowRadius: hp(5),
    shadowOffset: { height: hp(1), width: 0 },
    alignItems: "center",
    justifyContent: "center",
    width: wp(50),
    height: hp(50),
    backgroundColor: "#20B2AA",
    borderRadius: hp(50),
  },
  timerContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: hp(35),
    width: wp(100),
    borderRadius: hp(10),
    backgroundColor: "#000000",
    opacity: 0.5,
    top: hp(365),
    right: wp(15),
  },
  rating: {
    position: "absolute",
    height: hp(40),
    width: wp(60),
    borderRadius: hp(10),
    backgroundColor: "#ffa500",
    alignItems: "center",
    justifyContent: "center",
    top: hp(360),
    left: wp(15),
  },
  mapBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  mapView: {
    width: wp(200),
    height: hp(120),
  },
});
export default DetailScreen;
