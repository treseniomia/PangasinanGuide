import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Explore from "../components/Explore";
import axios from "axios";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function HomeScreen() {
  const [cotegories, setCategories] = useState([]);
  const [explore, setExplore] = useState([]);

  useEffect(() => {
    getCategories();
    getExplorePlaces();
  }, []);

  const getCategories = async () => {
    const URL = "http://localhost:8000/categories";
    const response = await axios.get(URL);

    console.log(response.data);
    setCategories(response.data);
  };

  const getExplorePlaces = async () => {
    const URL = "http://localhost:8000/places";
    const response = await axios.get(URL);

    console.log(response.data);
    setExplore(response.data);
  };

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          entering={FadeInUp.delay(500).duration(500)}
          style={styles.top}
        >
          <Image
            source={require("../.././assets/images/logowt.jpg")}
            style={styles.imgLogo}
          />
          <TouchableOpacity>
            <Ionicons
              name="navigate-circle"
              size={35}
              color={Colors.black}
              style={{ top: 60, right: 30 }}
            />
          </TouchableOpacity>
        </Animated.View>

        <Animated.Text
          entering={FadeInUp.delay(700).duration(500)}
          style={styles.title}
        >
          Where do you want
        </Animated.Text>
        <Animated.Text
          entering={FadeInUp.delay(800).duration(500)}
          style={styles.titlee}
        >
          to go?
        </Animated.Text>

        <SearchBar />

        <Categories />

        <Explore />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgLogo: {
    width: 50,
    height: 30,
    top: 60,
    left: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: "700",
    letterSpacing: 0.3,
    top: 76,
    left: 20,
    color: Colors.primary,
  },
  titlee: {
    fontSize: 29,
    fontWeight: "700",
    letterSpacing: 0.3,
    top: 78,
    left: 20,
    color: Colors.primary,
  },
});
