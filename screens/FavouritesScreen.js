import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";

export default function FavouritesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.cardContainer}>
        <View style={styles.favouriteCard}></View>
        <View style={styles.favouriteCard}></View>
        <View style={styles.favouriteCard}></View>
        <View style={styles.favouriteCard}></View>
        <View style={styles.favouriteCard}></View>
        <View style={styles.favouriteCard}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#313e4e",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    paddingTop: 20,
  },
  favouriteCard: {
    width: 180,
    height: 180,
    backgroundColor: "#e86e31",
    borderRadius: 15,
    margin: 1,
  },
});
