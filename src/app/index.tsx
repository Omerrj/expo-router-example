import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function ScreenOne() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Screen one" }} />

      <Link href={"/two"} style={styles.link}>
        Screen Two
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
