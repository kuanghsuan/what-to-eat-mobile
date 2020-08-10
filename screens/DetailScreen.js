const { View, Text, Image, StyleSheet } = require("react-native");

import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
// package
const { SharedElement } = require("react-navigation-shared-element");
import { Feather } from "@expo/vector-icons";
// fake data
import Demo from "../data/demo";

const DetailScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const { data } = props.route.params;
  const description = data.categories.map((category) => category.title + " ");
  console.log(data);
  return (
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
        </SharedElement>
        <SharedElement id={`item.${data.id}.description`}>
          <Text style={styles.resDescription}>{description}</Text>
        </SharedElement>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
      >
        <Feather name="navigation" size={20} color="#20B2AA" />
        <Text style={styles.resDescription}>
          {data.location.display_address[0]}
        </Text>
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
            Popular Dishes
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
});
export default DetailScreen;
