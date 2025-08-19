import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function TextInputField() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
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

      <View style={styles.other}>
        <View style={styles.rmWrapper}>
          <Ionicons name="checkmark-circle" size={23} color={Colors.primary} />
          <Text style={styles.rmbrTxt}>Remember me</Text>
        </View>
        <Text style={styles.frgtTxt}>Forgot password?</Text>
      </View>
    </View>
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
    marginBottom: 20,
  },
  rmWrapper: {
    flexDirection: "row",
    gap: 2,
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
