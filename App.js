import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    raleway: require("./assets/fonts/Poppins-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
