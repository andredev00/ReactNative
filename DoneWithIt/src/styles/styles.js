import StyleSheet from "react-native";

const constcontainer = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const Button = StyleSheet.create({
  button: {
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
  },
});

const logo = StyleSheet.create({
  logo: {
    width: 500,
    height: 500,
  },
});
