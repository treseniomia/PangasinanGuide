import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Colors from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";
import { ExploreType } from "@/type/types";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const Explore = (props: Props) => {
  const [explore, setExplore] = useState<ExploreType[]>([]);

  useEffect(() => {
    getExplore();
  }, []);

  const getExplore = async () => {
    const URL = `http://localhost:8000/explore`;
    const response = await axios.get(URL);

    console.log("Explore Response", response.data);
    setExplore(response.data);
  };
  return (
    <>
      <SafeAreaView>
        <Animated.View
          entering={FadeInDown.delay(1200).duration(500)}
          style={styles.container}
        >
          <View style={styles.exploreContainer}>
            <Text style={styles.exploreTxt}>Explore</Text>
            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                right: 28,
                top: 3,
              }}
            >
              <Text
                style={{ color: Colors.gray, fontSize: 17, fontWeight: "400" }}
              >
                {" "}
                See All{" "}
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={explore}
            keyExtractor={(item, index) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 225, height: 130, borderRadius: 10 }}
                />
                <TouchableOpacity style={styles.heartBtn}>
                  <Ionicons
                    name="heart-outline"
                    size={22}
                    color={Colors.black}
                  />
                </TouchableOpacity>

                <Text style={styles.titleTxt}>{item.title}</Text>
                <View style={styles.locCont}>
                  <Ionicons
                    name="location-outline"
                    size={20}
                    color={Colors.gray}
                  />
                  <Text style={styles.locationTxt}>{item.location}</Text>
                </View>

                {/* <Text style={styles.descriptionTxt}>{item.description}</Text> */}
                <View style={styles.ratingsCntnr}>
                  <Ionicons name="star" size={20} color={"orange"} />
                  <Text style={styles.ratingsTxt}>{item.ratings}</Text>
                </View>
                <Text style={styles.priceTxt}>{item.price}</Text>
              </TouchableOpacity>
            )}
            // ItemSeparatorComponent={<View style={{height: 16}}/>}
          />
        </Animated.View>
      </SafeAreaView>
    </>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  card: {
    width: 250,
    marginBottom: 9,
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginRight: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },

  titleTxt: {
    fontWeight: "600",
    fontSize: 18,
    color: Colors.primary,
    marginTop: 10,
    textAlign: "left",
  },
  exploreContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 5,
  },
  exploreTxt: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary,
  },
  locCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 2,
  },
  locationTxt: {
    fontSize: 13,
    color: Colors.gray,
    marginLeft: 4,
    flexShrink: 1,
  },
  ratingsCntnr: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  ratingsTxt: {
    fontSize: 14,
    marginLeft: 4,
    color: Colors.gray,
  },
  priceTxt: {
    fontWeight: "600",
    fontSize: 17,
    color: Colors.primary,
    marginTop: 2,
    alignSelf: "flex-end",
  },
  heartBtn: {
    position: "absolute",
    right: 20,
    top: 18,
    backgroundColor: "rgba(255,255,255,0.6)",
    padding: 6,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
