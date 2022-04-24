import { useRef } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import ButtonTest from "./ButtonTest";

export default function UseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <SafeAreaView>
      <Button
        onClick={() => {
          buttonRef.current.alterToogle();
        }}
        title={"Button from parent"}
      ></Button>
      <ButtonTest ref={buttonRef} />
    </SafeAreaView>
  );
}
