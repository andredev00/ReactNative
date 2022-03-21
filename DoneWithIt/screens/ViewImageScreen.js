import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

import colors from "../app/config/colors";
import dimensions from "../app/config/dimensions";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.chair}
        resizeMode={"contain"}
        source={require("../app/assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  chair: {
    width: dimensions.widthMax,
    height: dimensions.heightMax,
  },
  closeIcon: {
    width: dimensions.ViewImageScreenIconWidth,
    height: dimensions.ViewImageScreenIconHeight,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: dimensions.ViewImageScreenIconWidth,
    height: dimensions.ViewImageScreenIconHeight,
    backgroundColor: colors.secondary,
    position: "absolute",
    right: 30,
    top: 40,
  },
});
