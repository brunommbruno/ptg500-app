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
    backgroundColor: "#d9915b",
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 10,
  },
  active: {
    color: "white",
    fontSize: 20,
    marginRight: 20,
    padding: 5,
    paddingBottom: 3,
    fontWeight: "bold",
    borderColor: "transparent",
    borderBottomColor: "white",
    borderWidth: 3,
  },
  unactive: {
    color: "#d4d2d2",
    fontSize: 20,
    marginRight: 20,
    padding: 5,
    fontWeight: "bold",
  },
});
