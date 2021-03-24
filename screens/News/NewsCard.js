import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Linking,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const image = {
  uri:
    "https://www.rallyraidnetwork.com/rally/images/news/2019/09-september/baja-portalegre-8-9-w.jpg",
};

export default function NewsCard() {
  return (
    <TouchableHighlight onPress={() => Linking.openURL("http://google.com")}>
      <View style={styles.newsCard}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.cardTitle}>Lorem Ipsum dolor sit amet</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  newsCard: {
    height: 200,
    width: "100%",
    paddingBottom: 5,
  },
  cardTitle: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(22, 22, 22, 0.38)",
    width: "100%",
    padding: 2,
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
  },
});
