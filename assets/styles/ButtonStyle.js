import { StyleSheet } from "react-native";

export default StyleSheet.create({
  singleButton: {
    backgroundColor: "transparent",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    width: wp(60),
    height: hp(60),
    shadowOffset: {
      width: 0,
      height: hp(2),
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    padding: hp(1),
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-around",
    marginTop: hp(670),
  },
});
