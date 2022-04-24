import { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "./UseContext";

export default function User() {
  const { username } = useContext(AppContext);

  return (
    <View>
      <Text>User: {username}</Text>
    </View>
  );
}
