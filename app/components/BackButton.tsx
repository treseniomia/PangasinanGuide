import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

export default function BackButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons
          name={"chevron-back-outline"}
          size={26}
          color={Colors.black}
          style={{
            backgroundColor: Colors.lightblue,
            borderRadius: 20,
            padding: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 60,
    left: 1,
  },
  backBtn: {
    zIndex: 10,
    marginHorizontal: 25,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 6,
    paddingLeft: 0,
  },
});
