import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";


const TagItem = props => {
    const [isSelected, setIsSelected] = useState(false);

    const selectHandler = () => {
        setIsSelected(prevState => !prevState);
    }
   
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity onPress={selectHandler}>
          <View
            style={{ ...styles.imageContainer, opacity: isSelected ? 0.2 : 1 }}
          >
            <Image
              style={styles.image}
              source={{
                uri: props.imageUrl,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({

  gridItem: {
    margin: 4,
    height: 150,
    borderRadius: 10,
    elevation: 3,
    overflow: 'hidden'
  },

  imageContainer: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.45,
    borderColor: "black",
    overflow: "hidden",
  },
  image: {
    width: '100%',
    height: '100%',
  },
});


export default TagItem;
