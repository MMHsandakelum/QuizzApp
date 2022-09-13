import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React from "react";
import Title from "../components/title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910626.jpg?w=740&t=st=1663047266~exp=1663047866~hmac=e94593cf15e68dd111ed06dca2c0a446a4fccbb28fab5db377bce82da0274cc6",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Quiz")}>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
