import React from "react";

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
// package
const { SharedElement } = require("react-navigation-shared-element");
import {
  Feather,
  FontAwesome,
  AntDesign,
  Foundation,
} from "@expo/vector-icons";
import Tags from "react-native-tags";
import { LinearGradient } from "expo-linear-gradient";
// fake data
import Demo from "../data/demo";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import TouchableScale from "react-native-touchable-scale";
// import styles from "../assets/styles";

const DetailScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const { data } = props.route.params;
  const description = data.categories.map((category) => category.title);
  return (
    <View>
      <ScrollView>
        <SharedElement id={`item.${data.id}.image`}>
          <Image
            source={{ uri: data.image_url }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: height - 484,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        </SharedElement>

        <View style={{ padding: 16 }}>
          <SharedElement id={`item.${data.id}.name`}>
            <Text style={styles.resTitle}>{data.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
                paddingTop: 5,
              }}
            >
              <Feather name="dollar-sign" size={12} color="#20B2AA" />
              <Feather name="dollar-sign" size={12} color="#20B2AA" />
            </View>
          </SharedElement>
          <SharedElement id={`item.${data.id}.description`}>
            <View style={{ marginTop: 8 }}>
              <Tags
                initialTags={description}
                readonly={true}
                tagContainerStyle={styles.tags}
                tagTextStyle={styles.tags}
              />
            </View>
          </SharedElement>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 35,
            paddingVertical: 10,
            justifyContent: "space-around",
          }}
        >
          <TouchableScale activeScale={0.9}>
            <Feather name="map-pin" size={30} color="#20B2AA" />
          </TouchableScale>
          <TouchableScale activeScale={0.9}>
            <Feather name="phone-call" size={30} color="#20B2AA" />
          </TouchableScale>
          <TouchableScale activeScale={0.9}>
            <FontAwesome name="yelp" size={27} color="#20B2AA" />
          </TouchableScale>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Medium",
                color: "#000000",
                fontSize: 24,
              }}
            >
              Top 5 Dishes
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "#20B2AA",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Show All
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal={true}
            paddingHorizontal={16}
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image
                      source={item.image}
                      style={{
                        width: 250,
                        marginRight: 12,
                        height: 150,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      <LinearGradient
        colors={["#FFFFFF00", "#FFFFFF"]}
        style={styles.linearGradient}
      >
        <View style={styles.buttonContainer}>
          <TouchableScale activeScale={7}>
            <AntDesign name="closecircleo" size={50} color="#20B2AA" />
          </TouchableScale>
          <TouchableScale activeScale={7}>
            <Feather name="meh" size={50} color="#20B2AA" />
          </TouchableScale>
          <TouchableScale activeScale={7}>
            <Foundation name="heart" size={50} color="#20B2AA" />
          </TouchableScale>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  resTitle: {
    fontFamily: "Roboto-Medium",
    color: "#000000",
    fontSize: 24,
  },
  resDescription: {
    color: "#757E90",
    fontSize: 16,
    paddingTop: 10, // this is for temp position on the description tags
  },
  tags: {
    color: "#20B2AA",
    fontSize: 12,
    backgroundColor: "#FFFFFF",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-around",
    marginTop: 670,
  },
  linearGradient: {
    height: 50,
    position: "absolute",
    top: 500,
  },
});
export default DetailScreen;
