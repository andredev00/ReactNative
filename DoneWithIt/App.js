import { View, ImageBackground, Text, Image, StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import Parent from "./screens/Parent";

export default function App(props) {
  // return <ViewImageScreen></ViewImageScreen>;
  // return <WelcomeScreen></WelcomeScreen>;
  return <Parent />;
}
