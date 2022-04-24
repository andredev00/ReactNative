import { useState, createContext } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Login from "./Login";
import User from "./User";

function UseContext() {
  const [username, setUsername] = useState("");

  global.AppContext = createContext(null);

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <SafeAreaView style={styles.view}>
        <Login />
        <User />
      </SafeAreaView>
    </AppContext.Provider>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

export default UseContext;
