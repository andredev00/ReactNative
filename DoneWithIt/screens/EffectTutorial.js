import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function EffectTutorial() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
        console.log("im in my axios fetch method");
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <SafeAreaView>
      <View>
        <Text key={data.id}>{data[0].name}</Text>
      </View>
    </SafeAreaView>
  );
}
