import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import axios from "../../axios";

export default function RaceEvent({ route, navigation }) {
  const [previousRaces, setPreviousRaces] = useState();
  const [filtered, setFiltered] = useState(false);
  const [previousRace, setPreviousRace] = useState();

  const {
    race_event_instance_id,
    race_event,
    championship_event_instance_id,
    date_from,
    date_to,
    status,
  } = route.params;

  useEffect(() => {
    if (!previousRaces) {
      axios.get("/race-event-instances/closed").then(({ data }) => {
        setPreviousRaces(data.data);
      });
    }
  });

  function GetPreviousRace() {
    setPreviousRace(
      previousRaces.filter(
        (race) =>
          race.race_event[0].race_event_id === race_event[0].race_event_id
      )
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="go back" onPress={() => navigation.goBack()} />
      <Button title="get previous race" onPress={GetPreviousRace} />
      <Text style={{ color: "white", textAlign: "center" }}>
        CEI_id: {championship_event_instance_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        RV_id: {race_event.race_event_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {" "}
        REI_id:
        {race_event_instance_id},
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>S:{status}</Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        --------------
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        D: {date_from}/{date_to}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {race_event[0].race_event_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {race_event[0].main_championship_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {race_event[0].race_event_id}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {race_event[0].status}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        {race_event[0].town}
      </Text>
      <Text style={{ color: "white", textAlign: "center" }}>
        --------------
      </Text>
      {previousRace ? (
        <>
          <Text style={{ color: "white", textAlign: "center" }}>
            D: {previousRace[0].date_from}/{previousRace[0].date_to}
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            {previousRace[0].race_event[0].race_event_id}
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            {previousRace[0].race_event[0].main_championship_id}
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            {previousRace[0].race_event[0].race_event_id}
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            {previousRace[0].race_event[0].status}
          </Text>
          <Text style={{ color: "white", textAlign: "center" }}>
            {previousRace[0].race_event[0].town}
          </Text>
        </>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
