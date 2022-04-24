import { useContext } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AppContext from "./UseContext";

export default function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <View>
      <TextInput
        onChange={(event) => {
          setUsername(event.target.value);
        }}
        style={styles.input}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
