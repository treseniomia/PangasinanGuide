import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import SignIn from "./signin";
import SignUp from "./signup";
import { Colors } from "@/constants/Colors";
import SocialButtons from "./components/WelcomeScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Index() {
  return (
    <>
      <ImageBackground
        source={require("../assets/images/intro.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.wrapper}>
          <Animated.Text
            entering={FadeIn.delay(500).duration(500)}
            style={styles.title}
          >
            Explore the Beauty of Pangasinan
          </Animated.Text>
          <Animated.Text
            entering={FadeIn.delay(700).duration(500)}
            style={styles.description}
          >
            Experience the scenic beauty, rich culture, and unforgettable
            adventures that Pangasinan has to offer. Plan your journey. Book
            your escape.
          </Animated.Text>

          <WelcomeScreen />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 210,
  },
  title: {
    color: "#fff",
    fontSize: 45,
    marginBottom: 5,
    fontWeight: "800",
    letterSpacing: 0.6,
  },
  description: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
    marginBottom: 200,
    letterSpacing: 0.4,
  },
});
