import {
  AntDesign,
  Feather,
  FontAwesome,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";

// style
import CentralStyle from "../assets/styles/index"
// fake data
import { LinearGradient } from "expo-linear-gradient";
import MapView from 'react-native-maps';
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import Tags from "react-native-tags";
import TouchableScale from "react-native-touchable-scale";

// package
const { SharedElement } = require("react-navigation-shared-element");
// import styles from "../assets/styles";

const DetailScreen = (props) => {
  const { width, height } = Dimensions.get("window");
  const { data } = props.route.params;
  const description = data.categories.map((category) => category.title);
  console.log(data);
  return (
    <View style={CentralStyle.bg}>
      <ScrollView>
      <View>

        <SharedElement id={`item.${data.id}.image`}>
        <SliderBox
              images={data.photos}
              resizeMode="cover"
              dotColor="#FFEE58"
              ImageComponentStyle={{
                width: "100%",
                height: height - 484,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,}}
        />
        </SharedElement>


        <View style={styles.timerContainer}>
            <MaterialCommunityIcons name="clock-fast" size={24} color="white" />
            <Text style={{color:"#FFFFFF", fontWeight:"bold",fontSize:18,left:3}}>20min</Text>
        </View>
        <View style={styles.rating}>
              <Text style={{color:"white",fontSize:20,fontWeight:"bold"}}>{(parseFloat(data.rating)).toFixed(1)}</Text>
        </View>
      </View>


        <View style={{ padding: 16 }}>

          <SharedElement id={`item.${data.id}.name`}>
            <View style={{flexDirection:"row", justifyContent:"space-between",alignItems:"center",height:30}}>
            <Text style={styles.resTitle}>{data.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
                paddingTop: 5,
              }}
            >
              <Feather name="dollar-sign" size={13} color="#20B2AA" />
              <Feather name="dollar-sign" size={13} color="#20B2AA" />
            </View>
            </View>
          </SharedElement>

          <SharedElement id={`item.${data.id}.description`}>
            <View style={{ marginTop: 8, shadowColor:"#808080", shadowOpacity:0.1}}>
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
            paddingHorizontal: 35,
            paddingVertical: 10,
            justifyContent: "space-around",
          }}
        >
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <TouchableScale activeScale={0.9} style={styles.buttonBackground}>
              <Feather name="map-pin" size={30} color="#fff" />
            </TouchableScale>
            <Text style={{paddingTop:10, fontWeight:"bold", color:"gray"}}>View Map</Text>
          </View>
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <TouchableScale activeScale={0.9}style={styles.buttonBackground}>
              <Feather name="phone-call" size={30} color="#fff" />
            </TouchableScale>
            <Text style={{paddingTop:10, fontWeight:"bold", color:"gray"}}>Call</Text>
          </View>
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <TouchableScale activeScale={0.9}style={styles.buttonBackground}>
              <FontAwesome name="yelp" size={27} color="#fff" />
            </TouchableScale>
            <Text style={{paddingTop:10, fontWeight:"bold", color:"gray"}}>Yelp</Text>
          </View>
        </View>

        <View style={styles.mapBox}>
          <Text style={{height:120,width:200}}>This is the restranuts address, see here! i am right here.</Text>
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
        start={[1,0.3]}
        end={[1,1.5]}
        colors={['transparent','rgba(0,0,0,0.8)']}
        style={styles.linearGradient}
        />
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
  tagContainer:{
    backgroundColor: "#20B2AA",

  },
  tags: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    position:'absolute',
    backgroundColor: "transparent",
    justifyContent: "space-around",
    marginTop: 771,
    width:414,
    height:125
  },
  linearGradient: {
    position:"absolute",
    height: 135,
    left:0,
    right:0,
    bottom:0,
  },
  buttonBackground:{

    borderColor:'rgba(0,0,0,0.2)',
    shadowColor:"#808080",
    shadowOpacity:0.3,
    shadowRadius:5,
    shadowOffset:{height: 1,width: 0},
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:"#20B2AA",
    borderRadius:50,
  },
  timerContainer:{
    position:"absolute",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: 'center',
    height:35,
    width:100,
    borderRadius:10,
    backgroundColor:"#000000",
    opacity:0.5,
    top:365,
    right:15
  },
  rating:{
    position:"absolute",
    height: 40,
    width:60,
    borderRadius:10,
    backgroundColor:"#ffa500",
    alignItems:"center",
    justifyContent:"center",
    top:360,
    left:15
  },
  mapBox:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
  },
  mapView:{
    width:200,
    height:120,
  }
});
export default DetailScreen;
