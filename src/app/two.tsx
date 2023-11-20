import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Screen two" }} />

      <Link href={"/"} style={styles.link}>
        Screen One
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
