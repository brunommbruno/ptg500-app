import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/b/ba/Sepang_Victory_%282017%29_%28cropped%29.jpg",
        }}
        style={{ height: 200, width: 500 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
