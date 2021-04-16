import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import axios from "../axios";

import ChampEvent from "./Champs/ChampEvent";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  //stores all championships
  const [champs, setChamps] = useState();

  useEffect(() => {
    //GETS championships API and stores to state
    if (!champs) {
      axios.get(`/championships`).then(({ data }) => {
        setChamps(data.data);
      });
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CAMPEONATOS</Text>
      </View>
      <ScrollView>
        {!champs ? (
          //if champs has not been filled by API show loading
          <Text
            style={{ alignSelf: "center", color: "white", paddingTop: 100 }}
          >
            Loading...
          </Text>
        ) : (
          //if champs has been filled by API - loop through each champ and display
          champs.map((champ) => (
            <TouchableWithoutFeedback
              key={champ.championship_id}
              onPress={() =>
                //navigates to champ component, passing through current champ object properties
                navigation.navigate("Champ", {
                  championship_id: champ.championship_id,
                  championship_description: champ.championship_description,
                  main_country: champ.main_country,
                  status: champ.status,
                })
              }
            >
              <View style={styles.champGroup}>
                <View style={styles.champHeader}>
                  {/* country flag */}
                  <Image
                    style={styles.champImage}
                    source={{
                      uri:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png",
                    }}
                  />
                  {/* championship description */}
                  <Text style={styles.champHeaderText}>
                    {champ.championship_description}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

//loads champ screen
function ChampScreen({ navigation, route }) {
  //route param carries params passed through
  return <ChampEvent navigation={navigation} route={route} />;
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
      <Stack.Screen name="Champ" component={ChampScreen} />
    </Stack.Navigator>
  );
}

export default function ChampionshipsScreen({ navigation }) {
  return <MyStack />;
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
  champGroup: {
    marginBottom: 5,
  },
  champHeader: {
    backgroundColor: "white",
    width: "100%",
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  champHeaderText: {
    fontWeight: "bold",
    color: "black",
  },
  champImage: {
    height: 20,
    width: 30,
    marginRight: 10,
    borderRadius: 7,
  },
});
