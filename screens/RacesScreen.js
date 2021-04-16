import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  ScrollView,
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
  const [currentMonth, setCurrentMonth] = useState("04");

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

  const selectedMonthRaces = races
    ? races.filter((race) => race.date_from.substr(5, 2) === currentMonth)
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>EVENTOS</Text>
      </View>
      <ScrollView style={styles.dateNav} horizontal={true}>
        <Text
          style={currentMonth === "01" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("01")}
        >
          Janeiro
        </Text>
        <Text
          style={currentMonth === "02" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("02")}
        >
          Fevereiro
        </Text>
        <Text
          style={currentMonth === "03" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("03")}
        >
          Março
        </Text>
        <Text
          style={currentMonth === "04" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("04")}
        >
          Abril
        </Text>
        <Text
          style={currentMonth === "05" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("05")}
        >
          Maio
        </Text>
        <Text
          style={currentMonth === "06" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("06")}
        >
          Junho
        </Text>
        <Text
          style={currentMonth === "07" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("07")}
        >
          Julho
        </Text>
        <Text
          style={currentMonth === "08" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("08")}
        >
          Agosto
        </Text>
        <Text
          style={currentMonth === "09" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("09")}
        >
          Setembro
        </Text>
        <Text
          style={currentMonth === "10" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("10")}
        >
          Outubro
        </Text>
        <Text
          style={currentMonth === "11" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("11")}
        >
          Novembro
        </Text>
        <Text
          style={currentMonth === "12" ? styles.monthCurrent : styles.monthTab}
          onPress={() => setCurrentMonth("12")}
        >
          Dezembro
        </Text>
      </ScrollView>
      <ScrollView>
        {champs ? (
          champs.map((champ) => {
            const {
              championship_event_instance_id,
              championship,
              date_from,
              date_to,
              media_url,
              status,
            } = champs;

            const racesInChamp = selectedMonthRaces
              ? selectedMonthRaces.filter(
                  (race) =>
                    race.championship_event_instance_id ===
                    champ.championship_event_instance_id
                )
              : [];

            return racesInChamp.length === 0 ? null : (
              <View
                style={styles.champGroup}
                key={champ.championship_event_instance_id}
              >
                <View style={styles.champHeader}>
                  <Image
                    style={styles.champImage}
                    source={{ uri: champ.media_url }}
                  />
                  <Text style={styles.champHeaderText}>
                    {champ.championship[0].championship_description}
                  </Text>
                </View>
                {selectedMonthRaces
                  ? selectedMonthRaces.map((race) => {
                      const {
                        race_event_instance_id,
                        race_event,
                        championship_event_instance_id,
                        date_from,
                        date_to,
                        status,
                        media_url,
                      } = race;

                      const toMonth = (month) => {
                        switch (month.substr(5, 2)) {
                          case "01":
                            month = "Jan";
                            break;
                          case "02":
                            month = "Fev";
                            break;
                          case "03":
                            month = "Mar";
                            break;
                          case "04":
                            month = "Abr";
                            break;
                          case "05":
                            month = "Mai";
                            break;
                          case "06":
                            month = "Jun";
                            break;
                          case "07":
                            month = "Jul";
                            break;
                          case "08":
                            month = "Ago";
                            break;
                          case "09":
                            month = "Set";
                            break;
                          case "10":
                            month = "Out";
                            break;
                          case "11":
                            month = "Nov";
                            break;
                          case "12":
                            month = "Dez";
                            break;
                        }

                        return month;
                      };

                      return race.championship_event_instance_id ===
                        champ.championship_event_instance_id ? (
                        <TouchableWithoutFeedback
                          onPress={() =>
                            //navigates to race component, passing through current race object properties
                            navigation.navigate("Race", {
                              race_event_instance_id,
                              race_event,
                              championship: champ.championship[0],
                              championship_event_instance_id,
                              date_from,
                              date_to,
                              media_url,
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
                              {race.race_event[0].event_name}
                            </Text>
                            {race.date_from === race.date_to ? (
                              <Text style={styles.raceDate}>
                                {race.date_from.substr(8, 2)}{" "}
                                {toMonth(race.date_from)}
                              </Text>
                            ) : (
                              <Text style={styles.raceDate}>
                                {race.date_from.substr(8, 2)}{" "}
                                {toMonth(race.date_from)} -{" "}
                                {race.date_to.substr(8, 2)}{" "}
                                {toMonth(race.date_to)}
                              </Text>
                            )}
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
      </ScrollView>
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
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  loading: {
    paddingTop: 100,
    textAlign: "center",
    color: "white",
  },
  champGroup: {
    marginBottom: 20,
  },
  champHeader: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#d9915b",
    flexDirection: "row",
    alignItems: "center",
  },
  champHeaderText: {
    fontWeight: "bold",
    color: "black",
  },
  champImage: {
    height: 30,
    width: 40,
    marginRight: 10,
  },
  champRaces: {
    backgroundColor: "#282828",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#d9915b",
  },
  raceImage: {
    height: 30,
    width: 50,
    marginRight: 10,
    resizeMode: "stretch",
  },
  raceText: {
    fontSize: 18,
    color: "#c6c8cc",
  },
  raceDate: {
    fontSize: 15,
    position: "absolute",
    right: 20,
    color: "#c6c8cc",
  },
  header: {
    marginBottom: 10,
    width: "100%",
    backgroundColor: "#d9915b",
    flexDirection: "row",
    paddingTop: 31,
    paddingLeft: 15,
  },
  headerText: {
    color: "white",
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 8,
    fontWeight: "bold",
  },
  monthTab: {
    color: "#d4d2d2",
    fontSize: 20,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 3,
  },
  monthCurrent: {
    color: Platform.OS === "android" ? "white" : "#d9915b",
    fontSize: 20,
    padding: 10,
    borderColor: "transparent",
    borderBottomColor: "#d9915b",
    borderWidth: 3,
  },
  dateNav: {
    flexDirection: "row",
    flexGrow: 0,
  },
});
