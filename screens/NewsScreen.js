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
import MediaCard from "./News/MediaCard";

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
        </ScrollView>
      ) : (
        <ScrollView>
          <MediaCard
            title={
              "FORA DE ESTRADA T2 EP05 (TT Internacional e Portugueses no Dakar 2021)"
            }
            media_url={"https://www.youtube.com/embed/C9hI57_-QkI"}
          />
          <MediaCard
            title={"FORA DE ESTRADA T2 EP03 (Dakar 2021)"}
            media_url={"https://www.youtube.com/embed/I8eUZUCKDzc"}
          />
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
