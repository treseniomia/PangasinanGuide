import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function SocialButtons() {
  return (
    <>
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Or continue with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          {/* <Ionicons name="logo-google" size={20} color="#DB4437" /> */}
          <Image
            source={require("../../assets/images/google-logo.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={32} color="#000" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#888",
    fontWeight: "500",
  },

  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 1,
  },
});
