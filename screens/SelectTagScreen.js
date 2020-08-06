import { StyleSheet, View,  FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ActionButton from "react-native-action-button";
import TagItem from '../components/TagItem';
import ALL_TAG from "../data/Tags";


const SelectTag = (props) => {
  
  const submitTags = () => {
    props.navigation.navigate('menu');
  }

  const rederGridItem = (itemData) => {
    
    return (
      <TagItem
        title={itemData.item.tag_name}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {}}
      />
    );
}
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => index}
        data={ALL_TAG}
        renderItem={rederGridItem}
        numColumns={2}
      />
      <ActionButton buttonColor="rgba(231,76,60,1)" onPress={submitTags} />
    </View>
  );
};

SelectTag.navigationOptions = (navData) => {
  return {
    headerTitle: "Which food make you hungry?",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

});

export default SelectTag;
