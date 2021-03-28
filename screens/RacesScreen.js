import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import axios from "../axios";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RaceEvent from "./Races/RaceEvent";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

function HomeScreen({ navigation }) {
  const [races, setRaces] = useState();
  const [champs, setChamps] = useState();

  useEffect(() => {
    if (!races && !champs) {
      axios.get(`/race-event-instances/active`).then(({ data }) => {
        setRaces(data.data);
      });
      axios.get("/championship-event-instances/active").then(({ data }) => {
        setChamps(data.data);
      });
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {champs ? (
        champs.map((champ) => {
          const {
            championship_event_instance_id,
            championship_id,
            date_from,
            date_to,
            media_url,
            status,
          } = champs;

          return (
            <View key={championship_event_instance_id}>
              <View style={styles.champHeader}>
                <Text style={styles.champHeaderText}>
                  {champ.championship_id}
                </Text>
              </View>
              {races
                ? races.map((race) => {
                    const {
                      race_event_instance_id,
                      race_event,
                      championship_event_instance_id,
                      date_from,
                      date_to,
                      status,
                    } = race;

                    return race.championship_event_instance_id ===
                      champ.championship_event_instance_id ? (
                      <TouchableWithoutFeedback
                        onPress={() =>
                          //navigates to race component, passing through current race object properties
                          navigation.navigate("Race", {
                            race_event_instance_id,
                            race_event,
                            championship_event_instance_id,
                            date_from,
                            date_to,
                            status,
                          })
                        }
                        key={race.race_event_instance_id}
                      >
                        <View style={styles.champRaces}>
                          <Image
                            style={styles.raceImage}
                            source={{ uri: race.media_url }}
                          />
                          <Text style={styles.raceText}>
                            {race.race_event[0].town}
                          </Text>
                          <Text style={styles.raceDate}>
                            {race.date_from} - {race.date_to}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    ) : null;
                  })
                : null}
            </View>
          );
        })
      ) : (
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
  champHeader: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderColor: "orange",
    borderWidth: 2,
  },
  champHeaderText: {
    fontWeight: "bold",
  },
  champRaces: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "black",
  },
  raceImage: {
    height: 30,
    width: 60,
  },
  raceText: {
    fontSize: 20,
    paddingLeft: 10,
  },
  raceDate: {
    fontSize: 15,
    position: "absolute",
    right: 20,
  },
});
