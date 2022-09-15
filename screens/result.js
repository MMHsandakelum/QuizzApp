import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  const resultBanner =
    score > 30
      ? "https://img.freepik.com/free-vector/people-celebrating-goal-achievement-holding-trophy_23-2148825609.jpg?w=740&t=st=1663261186~exp=1663261786~hmac=c70d518f8eaec861a4c38b570296b3a484f0abd39f35a5d4e2e6a5c504ddad5f"
      : "https://img.freepik.com/free-vector/loser-failure-success-winning-businessmen-composition-with-discouraged-man-broken-egg-shellvector-illustration_1284-63222.jpg?w=740&t=st=1663261258~exp=1663261858~hmac=9c7fe4755fdb390003730242ac6bb1844a04e3b3b9bea064a70b69ef1bfca679";
  const handleGoHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreText}>{score}</Text>
      <View style={styles.bannerCon}>
        <Image
          source={{
            uri: resultBanner,
          }}
          resizeMode="contain"
          style={styles.banner}
        />

        <TouchableOpacity onPress={handleGoHome} style={styles.home}>
          <Text style={{ color: "white" }}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  home: {
    width: "100%",
    backgroundColor: "#5450A4",
    padding: 16,
    paddingRight: 40,
    paddingLeft: 40,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 40,
    alignSelf: "center",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerCon: {
    paddingVertical: 100,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  scoreText: {
    fontSize: 36,
  },
});
