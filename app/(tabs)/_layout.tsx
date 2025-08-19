import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Bookmark from "./bookmark";
import Book from "./bookings";
import Notifications from "./notifications";
import Profile from "./profile";
import HomeScreen from ".";
import { Colors } from "@/constants/Colors";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          backgroundClip: "#fff",
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          marginRight: 20,
          marginLeft: 20,
          marginBottom: 25,
          shadowOffset: { width: 2, height: 3 },
          shadowColor: Colors.black,
          shadowRadius: 6,
          shadowOpacity: 0.4,
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="index"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
                height: 59,
                width: 70,

                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="home"
                size={30}
                color={focused ? Colors.white : Colors.lightGray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="bookmark"
        component={Bookmark}
        options={{
          headerShown: true,
          headerTitle: "Likes",
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontSize: 22,
            letterSpacing: 0.5,
            marginBottom: 10,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
            borderRadius: Platform.OS === "ios" ? 55 : 1,
          },
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
                height: 59,
                width: 70,

                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="heart"
                size={30}
                color={focused ? Colors.white : Colors.lightGray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="bookings"
        component={Book}
        options={{
          headerShown: true,
          headerTitle: "Bookings",
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontSize: 22,
            letterSpacing: 0.5,
            marginBottom: 10,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
            borderRadius: Platform.OS === "ios" ? 55 : 1,
          },
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
                height: 59,
                width: 70,

                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="calendar"
                size={30}
                color={focused ? Colors.white : Colors.lightGray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="notifications"
        component={Notifications}
        options={{
          headerShown: true,
          headerTitle: "Notifications",
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontSize: 22,
            letterSpacing: 0.5,
            marginBottom: 10,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
            borderRadius: Platform.OS === "ios" ? 55 : 1,
          },
          tabBarShowLabel: false,
          tabBarBadge: 7,
          tabBarBadgeStyle: {
            backgroundColor: Colors.lightGreen,
            color: Colors.primary,
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
                height: 59,
                width: 70,

                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="notifications"
                size={30}
                color={focused ? Colors.white : Colors.lightGray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          headerShown: true,
          headerTitle: "Profile",
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontSize: 22,
            letterSpacing: 0.5,
            marginBottom: 10,
          },
          headerStyle: {
            backgroundColor: Colors.primary,
            borderRadius: Platform.OS === "ios" ? 55 : 1,
          },
          tabBarShowLabel: false,
          tabBarIconStyle: {
            marginTop: 10,
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused
                  ? "rgba(255,255,255,0.2)"
                  : "transparent",
                height: 59,
                width: 70,

                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="person"
                size={30}
                color={focused ? Colors.white : Colors.lightGray}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
