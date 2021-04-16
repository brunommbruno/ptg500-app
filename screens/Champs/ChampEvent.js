import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
} from "react-native";

export default function ChampEvent({ route, navigation }) {
  const {
    championship_id,
    championship_description,
    main_country,
    status,
  } = route.params;

  return (
    <View style={styles.container}>
      <Text>{championship_description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
