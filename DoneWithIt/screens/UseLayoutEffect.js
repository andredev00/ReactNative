import { useEffect, useLayoutEffect, useRef } from "react";
import { SafeAreaView, TextInput } from "react-native";

export default function UseLayoutEffect() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("estou dentro do useEffect");
  });

  useLayoutEffect(() => {
    console.log("estou dentro do useLayoutEffect");
    inputRef.current.value = "Pedro";
    console.log(inputRef.current.value);
  }, []);

  return (
    <SafeAreaView>
      <TextInput
        ref={inputRef}
        style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
        value={"André"}
      />
    </SafeAreaView>
  );
}
