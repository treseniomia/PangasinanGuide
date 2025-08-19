import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { NotificationsType } from "@/type/types";
import axios from "axios";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {};

const Notifications = (props: Props) => {
  const [notifications, setNotifications] = useState<NotificationsType[]>([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const URL = `http://localhost:8000/notifications`;
    const response = await axios.get(URL);
    console.log("Notifications Data", response.data);
    setNotifications(response.data);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: NotificationsType;
    index: number;
  }) => (
    <Animated.View
      entering={FadeInDown.delay(index * 100).springify()}
      style={styles.card}
    >
      <View style={styles.iconWrapper}>
        <Ionicons
          name="notifications-outline"
          size={26}
          color={Colors.primary}
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.date}>{item.timestamp}</Text>
        </View>
      </View>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.header}>Notifications</Text> */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>You have no notifications yet.</Text>
        }
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.primary,
    marginBottom: 15,
    marginTop: 10,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    padding: 15,
    borderRadius: 16,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: StyleSheet.hairlineWidth,
    margin: 14,
  },
  iconWrapper: {
    width: 46,
    height: 46,
    backgroundColor: Colors.white,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: Colors.black,
    marginBottom: 4,
  },
  message: {
    color: Colors.gray,
    fontSize: 14,
    marginBottom: 8,
    lineHeight: 20,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.primary,
  },
  date: {
    fontSize: 12,
    color: Colors.gray,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: Colors.gray,
    fontSize: 15,
  },
});
