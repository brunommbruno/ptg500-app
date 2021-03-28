import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
} from "react-native";

export default function Badge({ text, color }) {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 40,
        borderRadius: 30,
        padding: 3,
        marginBottom: 10,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 0,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});
