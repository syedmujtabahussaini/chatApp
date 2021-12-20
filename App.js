import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./config/navigation";
import Register from "./screens/Register";

export default function App() {
  return (
    <View>
      {/* <Register /> */}
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
