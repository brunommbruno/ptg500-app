import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Linking,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function NewsNav({ setMenu, selectedMenu }) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => setMenu("news")}>
          <Text
            style={selectedMenu === "news" ? styles.active : styles.unactive}
          >
            News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenu("media")}>
          <Text
            style={selectedMenu === "media" ? styles.active : styles.unactive}
          >
            Media
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  nav: {
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#282828",
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 10,
  },
  active: {
    color: "#F2771A",
    fontSize: 20,
    marginRight: 20,
    padding: 5,
    fontWeight: "bold",
  },
  unactive: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
    padding: 5,
    fontWeight: "bold",
  },
});
