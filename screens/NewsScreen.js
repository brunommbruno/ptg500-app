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
          <NewsCard
            title="Lorem Ipsum dolor sit amet"
            link="https://www.youtube.com/embed/I8eUZUCKDzc"
            image_url="https://matraxlubricants.com/wp-content/uploads/2020/11/1.jpg"
            type="main"
          />
          <NewsCard
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
            link="https://www.youtube.com/embed/I8eUZUCKDzc"
            image_url="https://www.bajaportalegre500.com/ResourcesUser/2020/Imagens/Fotos/Quads.jpg"
            type="sub"
          />
          <NewsCard
            title="Duis aute irure dolor in reprehenderit in voluptate velit "
            link="https://www.youtube.com/embed/I8eUZUCKDzc"
            image_url="https://www.rallyraidnetwork.com/rally/images/news/2019/10-october/map-top-21-10-w.jpg"
            type="sub"
          />
          <NewsCard
            title="Excepteur sint occaecat cupidatat noner proident, sunt in culpa qui officia "
            link="https://www.youtube.com/embed/I8eUZUCKDzc"
            image_url="https://eurol.com/app/uploads/2020/11/ten-brinke-viert-overwinning.jpg"
            type="sub"
          />
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
