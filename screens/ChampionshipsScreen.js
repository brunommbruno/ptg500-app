import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import axios from "../axios";

export default function ChampionshipsScreen() {
  const [champs, setChamps] = useState();
  const [currentYear, setCurrentYear] = useState("2016");

  useEffect(() => {
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
        {!champs
          ? null
          : champs.map((champ) => (
              <TouchableWithoutFeedback onPress={() => console.log("asd")}>
                <View style={styles.champGroup} key={champ.championship_id}>
                  <View style={styles.champHeader}>
                    <Text style={styles.champHeaderText}>
                      {champ.championship_description}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
      </ScrollView>
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
});
