import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { fonts } from "../../constants/fonts";
import { sizes } from "../../constants/sizes";
import { scale } from "react-native-size-matters";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Make changes in ./src/screens/Home/index.tsx to see difference
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: scale(16),
  },
  text: {
    fontFamily: fonts.bold,
    fontSize: sizes.large,
    alignSelf: "center",
  },
});
