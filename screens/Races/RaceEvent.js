import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function RaceEvent({ route, navigation }) {
  const {
    race_event_instance_id,
    race_event_id,
    championship_event_instance_id,
    date_from,
    date_to,
    status,
  } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "white", textAlign: "center" }}>
        CEI_id: {championship_event_instance_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        RV_id: {race_event_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {" "}
        REI_id:
        {race_event_instance_id},
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>S:{status}</Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        D: {date_from}/{date_to}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
