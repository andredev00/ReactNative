import {
  SafeAreaView,
  Button,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState } from "react";

export default function Parent() {
  const [counter, setCounter] = useState(0);

  const [inputValue, setInputValue] = useState("André Ferreira");

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    setCounter(counter - 1);
  };

  let changeTextRender = (event) => {
    const inputName = event;
    setInputValue(inputName);
  };

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>{counter}</Text>
      <Button onPress={incrementCounter} title={"+"}></Button>
      <Button onPress={minusCounter} title={"-"} />
      <TextInput
        maxLength={30}
        style={styles.input}
        onChangeText={changeTextRender}
      />
      <Text>{inputValue}</Text>
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
});
