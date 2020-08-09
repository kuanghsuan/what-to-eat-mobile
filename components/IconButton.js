import React from "react";
import { TouchableOpacity, View } from "react-native";
import { func, string } from "prop-types";
import buttonStyles from "../assets/styles/ButtonStyle";
import { WHITE, GRAY } from "../assets/styles/index";
// import { IconButton, Colors } from "react-native-paper";

// might change to scaling button later
// find a better icon collection package
const MyIconButton = ({ onPress, name, backgroundColor, color }) => (
  //   <TouchableOpacity
  //     style={[buttonStyles.singleButton, { backgroundColor }]}
  //     onPress={onPress}
  //     activeOpacity={0.65}
  //   >
  <View />
  // <IconButton
  //   icon={name}
  //   color={color}
  //   size={40}
  //   onPress={() => console.log("Pressed")}
  // {/* <Icon name={name} size={30} color={color} /> */}
  //   </TouchableOpacity>
);
// IconButton.defaultProps = {
//   color: WHITE,
//   backgroundColor: GRAY,
// };
// IconButton.propTypes = {
//   onPress: func.isRequired,
//   name: string.isRequired,
//   color: string,
//   backgroundColor: string,
// };
export default MyIconButton;
