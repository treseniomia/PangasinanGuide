import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import SocialButtons from "./SocialButtons";

export default function SignupInputField() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.textInput}>
          <Ionicons
            name={"mail"}
            size={23}
            color={Colors.primary}
            style={{
              marginLeft: 10,
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={Colors.primary}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.textInput}>
          <Ionicons
            name={"lock-closed"}
            size={23}
            color={Colors.primary}
            style={{
              marginLeft: 10,
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            placeholderTextColor={Colors.primary}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>

        <View style={styles.textInput}>
          <Ionicons
            name={"lock-closed"}
            size={23}
            color={Colors.primary}
            style={{
              marginLeft: 10,
              justifyContent: "center",
              alignSelf: "center",
            }}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.primary}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            style={styles.input}
          />
        </View>
        {/* 
        <View style={styles.other}>
          <View style={styles.rmWrapper}>
            <Ionicons
              name="checkmark-circle"
              size={23}
              color={Colors.primary}
            />
            <Text style={styles.rmbrTxt}>Remember me</Text>
          </View>
          <Text style={styles.frgtTxt}>Forgot password?</Text>
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  textInput: {
    flexDirection: "row",
    backgroundColor: Colors.lightblue,
    width: "100%",
    height: 50,
    borderRadius: 15,
    gap: 12,
    fontSize: 24,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
  },
  other: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  rmWrapper: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  frgtTxt: {
    fontWeight: "bold",
    color: Colors.primary,
  },
  rmbrTxt: {
    color: Colors.lightGray,
  },
});
