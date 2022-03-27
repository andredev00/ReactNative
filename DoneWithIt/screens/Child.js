import { Text, View, StatusBar, SafeAreaView, Platform } from "react-native";

export default function Child() {
  return (
    <StatusBar>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Text style={{ color: "black" }}>qwnerjqnwejr</Text>
      </View>
    </StatusBar>
  );
}
