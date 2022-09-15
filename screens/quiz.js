import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableOpacityBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const getQuiz = async () => {
    const url =
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple&encode=url3986";
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
  };
  useEffect(() => {
    getQuiz();
  }, []);
  const handleNext = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };
  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);

    shuffleArray(options);

    return options;
  };

  const handleSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
  };
  const handleShowResult = () => {
    navigation.navigate("Result", {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {questions && (
        <LinearGradient
          colors={["#242951", "#2C315E"]}
          style={styles.linearGradient}
        >
          <View style={styles.parent}>
            <View style={styles.questions}>
              <Text style={styles.question}>
                Q.{decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.answers}>
              <TouchableOpacity
                style={styles.answer}
                onPress={() => handleSelectedOption(options[0])}
              >
                <Text style={styles.answerText}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.answer}
                onPress={() => handleSelectedOption(options[1])}
              >
                <Text style={styles.answerText}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.answer}
                onPress={() => handleSelectedOption(options[2])}
              >
                <Text style={styles.answerText}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.answer}
                onPress={() => handleSelectedOption(options[3])}
              >
                <Text style={styles.answerText}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
              {ques !== 9 && (
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>PREW</Text>
                </TouchableOpacity>
              )}
              {ques !== 9 && (
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                  <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
              )}
              {ques === 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleShowResult}
                >
                  <Text style={styles.buttonText}>SHOW RESULT</Text>
                </TouchableOpacity>
              )}

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
