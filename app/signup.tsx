import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import SignIn from "./signin";
import BackButton from "./components/BackButton";
import Colors from "@/constants/Colors";
import SignupInputField from "./components/SignupInputField";
import SocialButtons from "./components/SocialButtons";
import Animated from "react-native-reanimated";

export default function SignUp() {
  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        style={styles.container}
      >
        <BackButton />
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>Create your new account</Text>
        <SignupInputField />
        <View>
          <Link href={"/"}>
            <TouchableOpacity
              // onPress={() => router.replace("/(tabs)")}
              style={styles.buttons}
            >
              <Text style={styles.btnText}>Create account</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <SocialButtons />{" "}
        <Text style={styles.signinContainer}>
          Already have an account?{" "}
          <TouchableOpacity onPress={() => router.replace("/signin")}>
            <Text style={styles.signupTxt}>SignIn</Text>
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
    paddingTop: Platform.OS === "ios" ? 180 : 0,
  },
  socialWrapper: {
    alignSelf: "stretch",
    marginTop: 65,
  },
  button: {
    padding: 10,
    backgroundColor: "rgba(255,255,255, 0.3)",
    borderRadius: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    gap: 7,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  logIn: {
    fontSize: 16,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 30,
  },
  textSpan: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: Colors.primary,
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.lightGray,
    fontWeight: "600",
    marginBottom: 50,
  },
  buttons: {
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
  signinContainer: {
    marginTop: 30,
    color: Colors.gray,
    marginBottom: 50,
    top: 125,
  },
  signupTxt: {
    color: Colors.primary,
    fontWeight: "bold",
  },
});
