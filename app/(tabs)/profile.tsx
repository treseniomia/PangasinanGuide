import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Profile() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Bar */}
      {/* <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Profile</Text>
        <View style={styles.topBarIcons}>
          <Ionicons name="settings-outline" size={24} color={Colors.white} />
          <Ionicons
            name="ellipsis-vertical"
            size={24}
            color={Colors.white}
            style={{ marginLeft: 15 }}
          />
        </View>
      </View> */}

      <StatusBar barStyle={"light-content"} />

      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/profile.jpg")}
          style={styles.img}
        />
        <Text style={styles.nameTxt}>Mia Batumbakal</Text>
        <Text style={styles.emailTxt}>mia.batumbakal@gmail.com</Text>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <StatBox number="12" label="Bookings" />
          <StatBox number="8" label="Favorites" />
          <StatBox number="5" label="Reviews" />
        </View>
      </View>

      {/* Menu Buttons */}
      <View style={styles.wrapper}>
        <ProfileButton icon="pencil" label="Edit Profile" />
        <ProfileButton icon="book" label="Booking History" />
        <ProfileButton icon="heart" label="Liked Trips" />
        <ProfileButton icon="card" label="Payment Methods" />
        <ProfileButton icon="help-circle" label="Support" />
        <ProfileButton icon="log-out" label="Log out" />
      </View>
    </ScrollView>
  );
}

const ProfileButton = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity style={styles.btnContainer}>
    <View style={styles.btnLeft}>
      <Ionicons
        name={icon as any}
        size={24}
        color={Colors.primary}
        style={styles.icon}
      />
      <Text style={styles.btnTxt}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
  </TouchableOpacity>
);

const StatBox = ({ number, label }: { number: string; label: string }) => (
  <View style={styles.statBox}>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topBar: {
    backgroundColor: Colors.primary,
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topBarTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.white,
  },
  topBarIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginTop: -40,
    paddingHorizontal: 20,
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: Colors.white,
    marginBottom: 10,
    marginTop: 60,
  },
  nameTxt: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  emailTxt: {
    fontSize: 14,
    color: Colors.white,
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
    marginTop: 10,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.gray,
  },
  wrapper: {
    paddingHorizontal: 20,
    gap: 12,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  btnLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
});
