import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import axios from "../../axios";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RaceEvent({ route, navigation }) {
  // const [previousRaces, setPreviousRaces] = useState();
  // const [filtered, setFiltered] = useState(false);
  // const [previousRace, setPreviousRace] = useState();

  const {
    race_event_instance_id,
    race_event,
    championship,
    championship_event_instance_id,
    date_from,
    date_to,
    media_url,
    status,
  } = route.params;

  // useEffect(() => {
  //   if (!previousRaces) {
  //     axios.get("/race-event-instances/closed").then(({ data }) => {
  //       setPreviousRaces(data.data);
  //     });
  //   }
  // });

  // function GetPreviousRace() {
  //   setPreviousRace(
  //     previousRaces.filter(
  //       (race) =>
  //         race.race_event[0].race_event_id === race_event[0].race_event_id
  //     )
  //   );
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="get previous race" onPress={GetPreviousRace} /> */}
      {/* {previousRace[0].race_event[0].town} */}
      <View style={styles.header}>
        <TouchableWithoutFeedback
          title="go back"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name={"return-up-back-outline"} size={35} color={"white"} />
        </TouchableWithoutFeedback>
      </View>
      <Image
        style={{
          height: "15%",
          width: "60%",
          alignSelf: "center",
          resizeMode: "stretch",
        }}
        source={{ uri: media_url }}
      />
      <View style={styles.raceEvent}>
        <View style={styles.subHead}>
          <Ionicons name={"navigate"} size={25} color={"#F2771A"} />
          <Text style={styles.eventTextRace}>{race_event[0].event_name}</Text>
        </View>
        <View style={styles.subHead}>
          <Ionicons name={"map"} size={25} color={"#F2771A"} />
          <Text style={styles.eventTextTown}>{race_event[0].town}</Text>
        </View>
      </View>
      <View style={styles.subHead}>
        <Ionicons name={"trophy"} size={25} color={"gold"} />
        <Text style={styles.eventTextChamp}>
          {championship.championship_description}
        </Text>
      </View>
      <View style={styles.subHead}>
        <Ionicons name={"globe"} size={25} color={"lightblue"} />
        <Text style={styles.eventTextCountry}>{championship.main_country}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#d9915b",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 31,
    paddingLeft: 15,
  },
  raceEvent: {
    marginTop: 10,
  },
  eventTextRace: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
  },
  eventTextTown: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
  },
  eventTextChamp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
  },
  eventTextCountry: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
  },
  subHead: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: "10%",
  },
});
