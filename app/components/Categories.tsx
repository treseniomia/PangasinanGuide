import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Colors from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";
import { CategoriesType } from "@/type/types";

type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    // const URL = `http://localhost:8000/categories`;
    const URL =
      Platform.OS === "android"
        ? "http://10.0.2.2:8000/categories"
        : "http://localhost:8000/categories";

    const response = await axios.get(URL);

    console.log("Categories Response", response.data);
    setCategories(response.data);
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(1000).duration(500)}
      style={styles.container}
    >
      <View style={styles.catContainer}>
        <Text style={styles.categoryTxt}>Categories </Text>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            right: 28,
            top: 3,
          }}
        >
          <Text style={{ color: Colors.gray, fontSize: 17, fontWeight: "400" }}>
            {" "}
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />

            <Text style={styles.cardTxt}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  card: {
    height: 140,
    width: 110,
    backgroundColor: Colors.white,
    borderRadius: 18,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 8,
    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // elevation (Android)
    elevation: 3,
    marginBottom: 4,
  },
  cardImage: {
    width: "100%",
    height: 90,
    borderRadius: 12,
  },
  cardTxt: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    color: Colors.black,
    marginTop: 8,
  },
  catContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 5,
    marginTop: 4,
  },
  categoryTxt: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  seeAllTxt: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: "500",
  },
});
