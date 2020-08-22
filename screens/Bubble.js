import React from "react";
import { TouchableOpacity, Text, View, FlatList } from "react-native";

const Bubble = (props) => {
  const moviesList = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
    { title: "9" },
    { title: "10" },
  ];
  renderRowItem = (itemData) => {
    var RandomNumber = Math.floor(Math.random() * 50) + 70;
    var radius = (RandomNumber + itemData.item.title.length) / 2;
    return (
      <View>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              backgroundColor: "#f673d7",
              borderRadius: radius,
              justifyContent: "center",
              alignSelf: "center",
              height: radius * 2,
              width: radius * 2,
              marginVertical: RandomNumber / 2,
              marginHorizontal: RandomNumber / 6,
            }}
          >
            <Text
              style={{
                color: "#fff",
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "500",
                fontSize: RandomNumber / 5,
              }}
            >
              {itemData.item.title}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={moviesList}
      numColumns={3}
      //keyExtractor={this._keyExtractor}
      renderItem={renderRowItem}
    />
  );
};

export default Bubble;
