import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View style={styles.close}></View>
        <View style={styles.delete}></View>
      </View>
      <Image
        style={styles.chair}
        resizeMode={"contain"}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chair: {
    width: "100%",
    height: "100%",
    bottom: 50,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 65,
  },
  close: {
    width: 30,
    height: 30,
    backgroundColor: "#fc5c65",
    marginLeft: 30,
  },
  delete: {
    width: 30,
    height: 30,
    backgroundColor: "#4ECDC4",
    marginRight: 30,
  },
});
