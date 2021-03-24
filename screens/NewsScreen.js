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
import NewsCard from "./News/NewsCard";
import NewsNav from "./News/NewsNav";

export default function News() {
  const [selectedMenu, setMenu] = useState("news");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" style="light" />
      <NewsNav setMenu={setMenu} selectedMenu={selectedMenu} />

      {selectedMenu === "news" ? (
        <ScrollView>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </ScrollView>
      ) : (
        <ScrollView>
          <NewsCard />
          <NewsCard />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
