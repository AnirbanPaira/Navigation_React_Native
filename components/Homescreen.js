import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native-web";
import Display from "./Display";
import * as ImagePicker from "expo-image-picker";
import { TextInput } from "react-native-web";
import Checkbox from "expo-checkbox";
import { Pressable, TouchableOpacity } from "react-native";
const Application = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  return (
    <View>
      <Text style={styles.text}>Login Form</Text>
      <Display></Display>
      <View style={styles.text}>
        <Text>Enter Your Name</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.text}>
        <Text>Enter Your Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.box}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.textinner}>I Will read</Text>
      </View>

      <TouchableOpacity
        style={[styles.btn, { backgroundColor: agree ? "#4630EB" : "grey" }]}
        disabled={!agree}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.navigate("Contact")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: "Cursive",
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    color: "rebeccapurple",
    textTransform: "upperCase",
  },
  input: {
    backgroundColor: "blue",
    borderRadius: 10,
    borderColor: "black",
    width: 200,
    height: 40,
    color: "white",
    padding: 12,
  },
  btn: {
    alignItems: "center",
    borderStyle: "none",
    backgroundColor: "#3289a8",
    boxSixing: "border-box",
    borderRadius: 30,
    borderColor: "thistle",
    cursor: "pointer",
    color: "#3c4043",
    fontSize: 14,
    fontWeight: 500,
    height: 48,
    justifyContent: "center",
    letterSpacing: 0.25,
  },
});

export default Application;
