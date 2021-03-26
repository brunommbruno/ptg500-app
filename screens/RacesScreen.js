import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import axios from "../axios";

export default function RacesScreen() {
  const [races, setRaces] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === false) {
      axios.get(`/race-event-instances`).then(({ data }) => {
        setRaces(data.data);
        setLoaded(true);
      });
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {races ? (
        races.map((race) => (
          <View style={styles.raceItem} key={race.race_event_instance_id}>
            <Text style={styles.raceItemText}>
              {race.championship_event_instance_id}, {race.race_event_id},{" "}
              {race.race_event_instance_id}, {race.status}, {race.date_from}/
              {race.date_to}
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  loading: {
    paddingTop: 100,
    textAlign: "center",
    color: "white",
  },
  raceItem: {
    marginBottom: 10,
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
  },
  raceItemText: {
    color: "white",
  },
});
