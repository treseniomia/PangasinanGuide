import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function SearchBar() {
  return (
    <Animated.View
      entering={FadeInUp.delay(900).duration(500)}
      style={styles.searchWrapper}
    >
      <Ionicons
        name="search"
        size={22}
        color={Colors.gray}
        style={styles.icon}
      />
      <TextInput
        placeholder="Discover Destination"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchBar}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    marginTop: 90,
    marginHorizontal: 20,
    backgroundColor: Colors.transparentBlue,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 15, // spacing inside the wrapper
  },
  icon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1, // para lumapad at gamitin natitirang space
    fontSize: 18,
    color: Colors.black,
  },
});
