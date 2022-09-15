import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
  const params = route.params;
  console.log(params);
  const handleGoHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <View style={styles.bannerCon}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/yes-no-concept-illustration_114360-7564.jpg?w=740&t=st=1663257554~exp=1663258154~hmac=e13ca71798e2f48e62b15fd0a5c44963414a053ff06dde5e06a62f7a60dd2821",
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
});
