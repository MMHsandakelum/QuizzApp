import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Quiz = () => {
  return (
    <LinearGradient
      colors={["#242951", "#2C315E"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.questions}>
          <Text style={styles.question}>This is a cool question ?</Text>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity style={styles.answer}>
            <Text style={styles.answerText}>Answer 01</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answer}>
            <Text style={styles.answerText}>Answer 02</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answer}>
            <Text style={styles.answerText}>Answer 03</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.answer}>
            <Text style={styles.answerText}>Answer 04</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text>END</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    height: "100%",
  },
  questions: {
    alignItems: "center",
    marginVertical: 30,
  },
  question: {
    color: "white",
    fontSize: 26,
    fontWeight: "350",
  },
  answers: {
    marginVertical: 16,
    flex: 1,
  },
  answer: {
    padding: 10,
    width: "100%",
    backgroundColor: "#BE6AE5",
    marginTop: 10,
    borderRadius: 15,
  },
  answerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 20,
  },
  buttons: {
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#3E9FFF",
    padding: 16,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 16,
    marginBottom: 20,
    marginTop: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
