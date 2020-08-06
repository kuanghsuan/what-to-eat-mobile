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

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: WHITE,
    overflow: "hidden",
    borderRadius: 20,
    height: 622,
    width: 370,
  },
  overlayLabels: {
    fontSize: 45,
    fontWeight: "bold",
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
  },

  cardContainer: {
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowColor: GRAY,
    shadowOffset: { height: 0, width: 0 },
  },

  //   card: {
  //     flex: 1,
  //     borderRadius: 4,
  //     borderWidth: 2,
  //     borderColor: "#E8E8E8",
  //     justifyContent: "center",
  //     backgroundColor: "white",
  //   },
  nameCardItem: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 486,
    marginBottom: 32,
    marginLeft: 48,
    backgroundColor: "white",
    borderRadius: 20,
    opacity: 0.8,
    width: 355,
    shadowColor: BLACK,
    shadowRadius: 15,
  },
  nameTextCardItem: {
    fontFamily: MEDIUM_FONT,
    color: BLACK,
    fontSize: 24,
    marginLeft: 24,
    marginBottom: 8,
    width: 300,
  },
  descriptionCardItem: {
    marginLeft: 24,
    color: GRAY,
    fontSize: 16,
  },
  overlayLabel: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderWidth: 6,
    borderRadius: 10,
  },
  overlayLabelText: {
    fontSize: 50,
    fontFamily: "Avenir",
    textAlign: "center",
  },

  //   actionsCardItem: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     paddingVertical: 30,
  //   },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  star: {
    fontFamily: MEDIUM_FONT,
    color: STAR_ACTIONS,
  },
  like: {
    fontSize: 25,
    fontFamily: MEDIUM_FONT,
    color: LIKE_ACTIONS,
  },
  dislike: {
    fontSize: 25,
    fontFamily: MEDIUM_FONT,
    color: DISLIKE_ACTIONS,
  },
  flash: {
    fontFamily: MEDIUM_FONT,
    color: FLASH_ACTIONS,
  },
});
