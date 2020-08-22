import { Dimensions, StyleSheet } from "react-native";
import { hp, wp } from "../../utils/sizing_utils";

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
export const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const MEDIUM_FONT = "Roboto-Medium";
const LIGHT_FONT = "Roboto-Light";

export default StyleSheet.create({
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: WHITE,
    overflow: "hidden",
    borderRadius: 20,
    height: hp(622),
    width: wp(366),
  },
  overlayLabels: {
    fontSize: hp(45),
    fontWeight: "bold",
    borderRadius: 10,
    padding: hp(10),
    overflow: "hidden",
  },
  cardContainer: {
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowColor: GRAY,
    shadowOffset: { height: 0, width: 0 },
  },

  nameCardItem: {
    position: "absolute",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    height: hp(104),
    marginTop: hp(486),
    marginBottom: hp(32),
    marginLeft: wp(48),
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    opacity: 0.8,
    width: wp(320),
    shadowColor: BLACK,
    shadowRadius: 15,
  },
  nameTextCardItem: {
    fontFamily: MEDIUM_FONT,
    color: BLACK,
    fontSize: wp(20),
    marginLeft: wp(24),
    marginBottom: hp(8),
    width: wp(290),
  },
  descriptionCardItem: {
    marginLeft: wp(24),
    color: GRAY,
    fontSize: wp(16),
  },
  overlayLabel: {
    justifyContent: "center",
    alignItems: "center",
    padding: hp(7),
    borderWidth: wp(6),
    borderRadius: 10,
  },
  overlayLabelText: {
    fontSize: hp(50),
    fontFamily: "Avenir",
    textAlign: "center",
  },
  button: {
    width: wp(60),
    height: hp(60),
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: hp(7),
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButton: {
    width: wp(40),
    height: hp(40),
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: hp(10), width: 0 },
  },
  star: {
    fontFamily: MEDIUM_FONT,
    color: STAR_ACTIONS,
  },
  like: {
    fontSize: hp(25),
    fontFamily: MEDIUM_FONT,
    color: LIKE_ACTIONS,
  },
  dislike: {
    fontSize: hp(25),
    fontFamily: MEDIUM_FONT,
    color: DISLIKE_ACTIONS,
  },
  flash: {
    fontFamily: MEDIUM_FONT,
    color: FLASH_ACTIONS,
  },
});
