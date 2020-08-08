import Carousel from "react-native-snap-carousel";
import { StyleSheet, View, Image, Text } from "react-native";
import React, { useState } from 'react';
carouselItems = [
  {
    imageUrl: "https://aturner316.files.wordpress.com/2019/04/wine.jpg",
  },
  {
    imageUrl:
      "https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg",
  },
  {
    imageUrl:
      "https://diethood.com/wp-content/uploads/2018/10/Garlic-Butter-Baked-Salmon-12-500x500.jpg",
  },
];

const StoreDetail = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.dishItem}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </View>
    );
  };

  return (
      <Carousel
        layout={"default"}
        //ref={(ref) => (this.carousel = ref)}
        data={carouselItems}
        sliderWidth={400}
        itemWidth={300}
        renderItem={_renderItem}
        onSnapToItem={(idx) => setActiveIndex(idx)}
      />
  );
};


const styles = StyleSheet.create({
  dishItem: {
    backgroundColor: "floralwhite",
    borderRadius: 10,
    width: "80%",
    height: "100%",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default StoreDetail;
