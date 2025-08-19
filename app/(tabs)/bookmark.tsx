import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BookmarkType } from "@/type/types";
import axios from "axios";
import Colors from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const bookmark = (props: Props) => {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  useEffect(() => {
    getBookmark();
  }, []);

  const getBookmark = async () => {
    const URL =
      Platform.OS === "android"
        ? "http://10.0.2.2:8000/bookmark"
        : "http://localhost:8000/bookmark";
    const response = await axios.get(URL);

    console.log("Bookmark Response", response.data);
    setBookmarks(response.data);
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.headerTxt}>
            <Text style={styles.headerStyle}>Your Upcoming Trips</Text>
            <Ionicons name="heart" size={32} color={"red"} />
          </View>

          <FlatList
            data={bookmarks}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item, index }) => (
              // <View style={styles.boxContainer}>
              <Animated.View
                entering={FadeInDown.delay(index * 100).springify()}
                style={styles.box}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.titleTxt}>{item.title}</Text>
                <View style={styles.locCont}>
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color={Colors.gray}
                  />
                  <Text style={styles.locationTxt}>{item.location}</Text>
                </View>
                <Text style={styles.descriptionTxt}>{item.description}</Text>
              </Animated.View>
              // </View>
            )}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  color: Colors.lightGray,
                  fontSize: 16,
                }}
              >
                You haven’t saved any destinations yet. Tap the bookmark icon to
                keep track of places you love!
              </Text>
            }
            // ItemSeparatorComponent={<View style={{height: 15}}/>}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default bookmark;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100, // dagdag para hindi matakpan ng nav bar
    // backgroundColor: Colors.background || "#F8F9FA", // light clean bg
    backgroundColor: Colors.white,
  },
  headerTxt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerStyle: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.primary || "#333",
  },
  box: {
    backgroundColor: Colors.white || "#FFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    height: 160,
    width: "100%",
    borderRadius: 12,
    marginBottom: 12,
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.primary || "#1A1A1A",
    marginBottom: 4,
  },
  locCont: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  locationTxt: {
    fontSize: 16,
    color: Colors.gray || "#6C757D",
    marginLeft: 4,
  },
  descriptionTxt: {
    fontSize: 15,
    color: Colors.black || "#4F4F4F",
    lineHeight: 20,
    marginTop: 4,
    letterSpacing: 0.5,
  },
});
