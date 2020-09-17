import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, {useState} from "react";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import Divider from "react-native-divider";
import Dishes from '../components/Dishes';

const StoreDetail = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);


    _renderItem = ({item,index}) => {
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 15,
              height: 100,
              padding: 20,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        )
    }

  return (
    <ImageBackground
      source={{
        uri:
          "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/slideshow/feature_-_Main_hall_1.jpg",
      }}
      style={styles.bg}
    >
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sanguan resto</Text>
        </View>
        <Divider />
        <View style={styles.infoContainer}>
          <Entypo name="address" size={24} color="black" />
          <Text style={styles.subTile}>
            1144 Knulson, Big Bear Lake State: 73681
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Ionicons name="md-time" size={24} color="black" />
          <Text style={styles.subTile}>Opened: 12:00 PM - 8:00 PM</Text>
        </View>

        <View style={styles.infoContainer}>
          <AntDesign name="phone" size={24} color="black" />
          <Text style={styles.subTile}>996-669-2361</Text>
        </View>
        <View style={styles.dishContainer}>
          <Dishes />
        </View>
      </View>
    </ImageBackground>
  );
};

StoreDetail.navigationOptions = (navData) => {
  return {
    headerTitle: "Deatil",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bg: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.5,
  },
  card: {
    position: "absolute",
    top: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
    backgroundColor: "white",
    borderRadius: 30,
    alignItems: "flex-start",
    padding: 30,
  },
  titleContainer: {
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 15,
  },

  title: {
    fontSize: 30,
  },
  subTile: {
    fontSize: 15,
    marginLeft: 20,
  },
  dishContainer: {
    height: "40%",
    width: "80%",
  },
});

export default StoreDetail;
