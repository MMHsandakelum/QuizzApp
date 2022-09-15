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
      <View style={styles.container}>
        <Title titleText="EasyQuiz.lk" />
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910627.jpg?w=740&t=st=1663257368~exp=1663257968~hmac=bc349d48c486932d30bd9f14203c35eb6a013dd170acb7cf10a52ec763ed4d33",
            }}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quiz")}
          style={styles.button}
        >
          <Text style={styles.title}>Start</Text>
        </TouchableOpacity>
      </View>
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
    flex: 1,
  },
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: "100%",
  },
  wrapper: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#5450A4",
    padding: 16,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 40,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
});
