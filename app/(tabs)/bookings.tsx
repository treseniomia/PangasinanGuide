import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
import Colors from "@/constants/Colors";
import { BookingsType } from "@/type/types";
import axios from "axios";

const TABS = ["Active", "Past", "Cancelled"];

const BookScreen = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [prevTab, setPrevTab] = useState("Active");
  const [activeBookings, setActiveBookings] = useState<BookingsType[]>([]);

  useEffect(() => {
    getActiveBookings();
  }, []);

  const getActiveBookings = async () => {
    const URL = `http://localhost:8000/bookings`;
    const response = await axios.get(URL);

    console.log("Bookings Response", response.data);
    setActiveBookings(response.data);
  };

  const handleTabPress = (tab: string) => {
    setPrevTab(activeTab);
    setActiveTab(tab);
  };

  const renderScreen = () => {
    let animation =
      TABS.indexOf(activeTab) > TABS.indexOf(prevTab)
        ? SlideInRight.duration(250) // smoother
        : SlideInLeft.duration(250); // smoother

    const filteredData = activeBookings.filter(
      (item) => item.status === activeTab
    );

    if (activeTab === "Active") {
      return (
        <Animated.View
          key="activeTab"
          entering={animation}
          style={styles.screen}
        >
          {/* <Text style={styles.text}>📍 List of Active Bookings</Text> */}
          <Text style={styles.text}>
            {activeTab === "Active"
              ? " "
              : activeTab === "Past"
              ? "✅ Past Bookings History"
              : "❌ Cancelled Bookings"}
          </Text>

          <View>
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ paddingBottom: 50 }}
              renderItem={({ item, index }) => (
                <View style={styles.activeContainer}>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <Text style={styles.activeTitle}>{item.title}</Text>
                  <Text style={styles.activePrice}>{item.price}</Text>
                  <Text style={styles.activeDate}>{item.date}</Text>
                  <Text style={styles.activeReserved}>{item.reserved}</Text>
                </View>
              )}
              ListEmptyComponent={
                <Text
                  style={{
                    textAlign: "center",
                    color: Colors.lightGray,
                    fontSize: 16,
                  }}
                >
                  You don’t have any active bookings right now. Start exploring
                  and book your next destination!
                </Text>
              }
            />
          </View>
        </Animated.View>
      );
    }

    if (activeTab === "Past") {
      return (
        <Animated.View key="past" entering={animation} style={styles.screen}>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 50 }}
            renderItem={({ item, index }) => (
              <View style={styles.activeContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.activeTitle}>{item.title}</Text>
                <Text style={styles.activePrice}>{item.price}</Text>
                <Text style={styles.activeDate}>{item.date}</Text>
                <Text style={styles.activeReserved}>{item.reserved}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  color: Colors.lightGray,
                  fontSize: 16,
                }}
              >
                You haven’t completed any trips yet. Your past adventures will
                show up here after you travel.
              </Text>
            }
          />
        </Animated.View>
      );
    }

    if (activeTab === "Cancelled") {
      return (
        <Animated.View
          key="cancelled"
          entering={animation}
          style={styles.screen}
        >
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 50 }}
            renderItem={({ item, index }) => (
              <View style={styles.activeContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.activeTitle}>{item.title}</Text>
                <Text style={styles.activePrice}>{item.price}</Text>
                <Text style={styles.activeDate}>{item.date}</Text>
                <Text style={styles.activeReserved}>{item.reserved}</Text>
              </View>
            )}
            ListEmptyComponent={
              <Text
                style={{
                  textAlign: "center",
                  color: Colors.lightGray,
                  fontSize: 16,
                }}
              >
                No cancelled bookings. All your plans are still on track!
              </Text>
            }
          />
        </Animated.View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Screen */}
      {renderScreen()}
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.white, padding: 20 },
  tabContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 1,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.gray,
    backgroundColor: "transparent",
  },
  activeTabButton: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: Colors.gray,
    fontWeight: "500",
  },
  activeTabText: {
    color: Colors.white,
    fontWeight: "700",
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 20,
    marginTop: 5, // konting space lang mula sa tabbar
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.primary,
  },
  activeContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    height: 160,
    width: "100%",
    borderRadius: 12,
    marginBottom: 12,
  },
  activeTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: Colors.black,
  },
  activePrice: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.black,
  },
  activeDate: {
    fontSize: 17,
    fontWeight: "400",
    color: Colors.gray,
  },
  activeReserved: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.gray,
  },
});
