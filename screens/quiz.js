import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
    setQuestions(data.results);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <View style={styles.container}>
      {questions && (
        <LinearGradient
          colors={["#242951", "#2C315E"]}
          style={styles.linearGradient}
        >
          <View style={styles.parent}>
            <View style={styles.questions}>
              <Text style={styles.question}>Q.{questions[ques].question}</Text>
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
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  questions: {
    paddingTop: 20,
    alignItems: "center",
    marginVertical: 30,
  },
  question: {
    color: "white",
    fontSize: 24,
    fontFamily: "raleway",
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
    fontWeight: "600",
    paddingLeft: 10,
    fontFamily: "raleway",
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
  parent: {
    height: "100%",
  },
});
