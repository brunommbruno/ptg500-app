import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import axios from "../../axios";

export default function RaceEvent({ route, navigation }) {
  const [main_race, setRace] = useState();
  const [main_championship, setChampionship] = useState();
  const [classfication, setClassfication] = useState();
  const [loaded, setLoaded] = useState(false);

  const {
    race_event_instance_id,
    race_event_id,
    championship_event_instance_id,
    date_from,
    date_to,
    status,
  } = route.params;

  useEffect(() => {
    if (loaded === false) {
      axios.get(`/main-race-events/${race_event_id}`).then(({ data }) => {
        setRace(data.data);
        setLoaded(true);
      });
    }
  });

  return loaded ? (
    <SafeAreaView style={styles.container}>
      <Button title="go back" onPress={() => navigation.goBack()} />
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
      <Text style={{ color: "white", textAlign: "center" }}>
        --------------
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {main_race.event_name}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {main_race.main_championship_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {main_race.race_event_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {main_race.status}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {main_race.town}
      </Text>
    </SafeAreaView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
