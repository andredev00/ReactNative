import { View, ImageBackground, Text, Image, StyleSheet } from "react-native";

import colors from "../app/config/colors";

export default function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../app/assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          style={styles.logo}
          resizeMode={"center"}
          resizeMethod={"auto"}
          source={require("../app/assets/logo-red.png")}
        />
        <Text style={styles.text}>Sell What You Don't Need</Text>
        <View style={styles.loginInput}></View>
        <View style={styles.registerInput}></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: colors.black,
    textAlign: "center",
    bottom: 15,
    fontWeight: "300",
  },
  logo: {
    width: "25%",
    height: "25%",
    alignSelf: "center",
    top: 20,
  },
  loginInput: {
    width: "100%",
    backgroundColor: colors.primary,
    height: 60,
    marginTop: "auto",
  },
  registerInput: {
    width: "100%",
    backgroundColor: colors.secondary,
    height: 60,
  },
});
