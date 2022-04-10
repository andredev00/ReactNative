import { View, ImageBackground, Text, Image, StyleSheet } from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
import EffectTutorial from "./screens/EffectTutorial";

export default function App(props) {
  // return <ViewImageScreen></ViewImageScreen>;
  return <EffectTutorial></EffectTutorial>;
}
