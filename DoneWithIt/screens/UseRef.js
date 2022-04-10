import { useRef } from "react";
import {
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";

export default function UseRef() {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <SafeAreaView>
      <TextInput keyboardType={"default"} ref={inputRef} style={styles.input} />
      <Button title="Focus the input" onPress={onButtonClick} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  name: {
    color: "black",
    fontSize: 12,
  },
});
