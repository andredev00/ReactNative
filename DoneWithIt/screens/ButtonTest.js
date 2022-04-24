import { Button, Text, View } from "react-native";
import { forwardRef, useImperativeHandle, useState } from "react";

const ButtonTest = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <View>
      <Button title={"Button from child"} />
      <Text>Toogle</Text>
    </View>
  );
});

export default ButtonTest;
