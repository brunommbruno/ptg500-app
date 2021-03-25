import { StatusBar } from "expo-status-bar";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

export default function MediaCard({ media_url, title }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <SafeAreaView style={styles.container}>
      {/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: media_url,
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />*/}
      <WebView
        style={styles.video}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          html: `<iframe allowfullscreen width=100% height=100% src=${media_url} />`,
        }}
      />
      <Text style={styles.cardTitle}>{title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  video: {
    height: 200,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  cardTitle: {
    bottom: 20,
    position: "absolute",
    backgroundColor: "rgba(22, 22, 22, 0.38)",
    width: "100%",
    padding: 2,
    fontSize: 20,
    color: "white",
    fontStyle: "italic",
  },
});
