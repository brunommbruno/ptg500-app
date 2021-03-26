import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import axios from "../axios";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RaceEvent from "./Races/RaceEvent";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  //stores race once loaded and sets loaded to true
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
      {/* maps through each race object and displays its content */}
      {races ? (
        races.map((race) => {
          //destructuring each object
          const {
            race_event_instance_id,
            race_event_id,
            championship_event_instance_id,
            date_from,
            date_to,
            status,
          } = race;

          return (
            <TouchableWithoutFeedback
              onPress={() =>
                //navigates to race component, passing through current race object properties
                navigation.navigate("Race", {
                  race_event_instance_id,
                  race_event_id,
                  championship_event_instance_id,
                  date_from,
                  date_to,
                  status,
                })
              }
              key={race.race_event_instance_id}
            >
              <View style={styles.raceItem}>
                {/* displays current race object properties */}
                <Text style={styles.raceItemText}>
                  {race.championship_event_instance_id}, {race.race_event_id},{" "}
                  {race.race_event_instance_id}, {race.status}, {race.date_from}
                  /{race.date_to}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })
      ) : (
        //waits for GET request to be successful before displaying content to prevent error
        <Text style={styles.loading}>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

//loads race screen
function RaceScreen({ navigation, route }) {
  //route param carries params passed through
  return <RaceEvent navigation={navigation} route={route} />;
}

const Stack = createStackNavigator();

//currents screen navigation
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Race" component={RaceScreen} />
    </Stack.Navigator>
  );
}

export default function RacesScreen({ navigation }) {
  return <MyStack />;
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
