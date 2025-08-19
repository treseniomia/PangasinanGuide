import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import SignIn from "../signin";
import SignUp from "../signup";
import { Link, router } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

export default function WelcomeScreen() {
  return (
    <Animated.View
      entering={FadeInDown.delay(900).duration(1200)}
      style={styles.socialWrapper}
    >
      <View>
        <Link href="../signin" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View>
        <Link href="../signup" asChild>
          <TouchableOpacity>
            <Text style={styles.textSpan}>Create an account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
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
});
