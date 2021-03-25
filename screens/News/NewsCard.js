import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Linking,
  Image,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function NewsCard({ image_url, link, title, type }) {
  const image = {
    uri: image_url,
  };

  return type === "main" ? (
    <TouchableHighlight onPress={() => Linking.openURL(link)}>
      <View style={styles.newsCard}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.cardTitle}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  ) : (
    <TouchableHighlight onPress={() => Linking.openURL(link)}>
      <View style={styles.subNewsCard}>
        <Image source={image} style={styles.subImage}></Image>
        <Text style={styles.subCardTitle}>{title}</Text>
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
    marginBottom: 30,
  },
  cardTitle: {
    bottom: 0,
    position: "absolute",
    backgroundColor: "rgba(22, 22, 22, 0.38)",
    width: "100%",
    padding: 2,
    fontSize: 30,
    color: "white",
    fontStyle: "italic",
  },
  subNewsCard: {
    height: 80,
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
  },
  subCardTitle: {
    width: "60%",
    fontSize: 15,
    color: "white",
    paddingLeft: 10,
  },
  subImage: {
    width: "40%",
  },
});
