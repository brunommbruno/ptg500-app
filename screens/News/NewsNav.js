import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Linking,
  ScrollView,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withSafeAreaInsets } from "react-native-safe-area-context";

export default function NewsNav({ setMenu, selectedMenu }) {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity
          onPress={() => setMenu("news")}
          style={
            selectedMenu === "news"
              ? styles.activeBorder
              : styles.unactiveBorder
          }
        >
          <Text
            style={selectedMenu === "news" ? styles.active : styles.unactive}
          >
            NEWS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMenu("media")}
          style={
            selectedMenu === "media"
              ? styles.activeBorder
              : styles.unactiveBorder
          }
        >
          <Text
            style={selectedMenu === "media" ? styles.active : styles.unactive}
          >
            MEDIA
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
    paddingTop: Platform.OS === "android" ? 50 : 25,
    paddingLeft: 15,
  },
  active: {
    color: "white",
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 8,
    fontWeight: "bold",
  },
  unactive: {
    color: "#d4d2d2",
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 8,
  },
  activeBorder: {
    borderColor: "transparent",
    borderBottomColor: "white",
    borderWidth: 3,
    marginRight: 15,
  },
  unactiveBorder: {
    borderColor: "transparent",
    borderWidth: 3,
    marginRight: 15,
  },
});
