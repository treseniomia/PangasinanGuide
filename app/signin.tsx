import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import SignUp from "./signup";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import TextInputField from "./components/TextInputField";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "./components/BackButton";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function SignIn() {
  return (
    <>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <BackButton />

        <Image
          source={require("../assets/images/logo.png")}
          style={{ width: 130, height: 130, marginTop: 25 }}
        />

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to your account</Text>

        <TextInputField />

        <View>
          <Link href={"/"}>
            <TouchableOpacity
              onPress={() => router.replace("/(tabs)")}
              style={styles.button}
            >
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={styles.signupContainer}>
          Don't have an account?
          <TouchableOpacity onPress={() => router.replace("/signup")}>
            <Text style={styles.signupTxt}> SignUp</Text>
          </TouchableOpacity>
        </Text>
      </KeyboardAvoidingView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 20,
  },

  title: {
    textAlign: "center",
    color: Colors.primary,
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.lightGray,
    fontWeight: "600",
    marginBottom: 35,
  },
  button: {
    width: "100%",
    height: 45,
    padding: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
  signupContainer: {
    marginTop: 20,
    color: Colors.gray,
    flexDirection: "row",
    position: "absolute",
    bottom: 40,
  },
  signupTxt: {
    color: Colors.primary,
    fontWeight: "bold",
    top: 5,
  },
});
