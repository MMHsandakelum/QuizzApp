import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Quiz = () => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text>This is a cool question ?</Text>
      </View>
      <View style={styles.answers}>
        <TouchableOpacity>
          <Text>Answer 01</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Answer 02</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Answer 03</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Answer 04</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%",
  },
  question: {
    marginVertical: 16,
  },
  answers: {
    marginVertical: 16,
    flex: 1,
  },
  button: {
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
