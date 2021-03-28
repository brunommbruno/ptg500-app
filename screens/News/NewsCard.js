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
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

export default function NewsCard({ image_url, link, title, type }) {
  const image = {
    uri: image_url,
  };

  return type === "main" ? (
    <TouchableWithoutFeedback onPress={() => Linking.openURL(link)}>
      <View style={styles.newsCard}>
        <ImageBackground
          source={image}
          style={styles.image}
          imageStyle={{ borderRadius: 15 }}
        ></ImageBackground>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onPress={() => Linking.openURL(link)}>
      <View style={styles.subNewsCard}>
        <Image source={image} style={styles.subImage}></Image>
        <Text style={styles.subCardTitle}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  newsCard: {
    height: 230,
    width: "100%",
    marginBottom: 30,
  },
  cardTitle: {
    width: "100%",
    paddingLeft: 5,
    fontSize: 20,
    color: "white",
    marginTop: 6,
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
    borderRadius: 5,
  },
});
