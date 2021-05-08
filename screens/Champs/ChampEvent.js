import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
  TouchableWithoutFeedback,
  Button,
  ScrollView,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import axios from "../../axios";

export default function ChampEvent({ route, navigation }) {
  const [instances, setInstances] = useState();

  const {
    championship_id,
    championship_description,
    main_country,
    status,
  } = route.params;

  useEffect(() => {
    //GETS championships API and stores to state
    if (!instances) {
      axios
        .get(`/championships/${championship_id}/instances`)
        .then(({ data }) => {
          setInstances(data.data);
        });
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="click me" onPress={() => console.log(instances)} /> */}
      <View style={styles.header}>
        <TouchableWithoutFeedback
          title="go back"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name={"return-up-back-outline"} size={35} color={"white"} />
        </TouchableWithoutFeedback>
      </View>
      <ScrollView>
        <View style={styles.subHead}>
          <Ionicons name={"trophy"} size={25} color={"gold"} />
          <Text style={styles.eventTextChamp}>{championship_description}</Text>
        </View>
        <View style={styles.subHead}>
          <Ionicons name={"globe"} size={25} color={"lightblue"} />
          <Text style={styles.eventTextChamp}>{main_country}</Text>
        </View>
        {!instances ? (
          <Text
            style={{ alignSelf: "center", color: "white", paddingTop: 100 }}
          >
            Loading...
          </Text>
        ) : (
          instances.map((instance) => (
            <View
              style={styles.champGroup}
              key={instance.championship_event_instance_id}
            >
              <View style={styles.champHeader}>
                <Image
                  style={styles.champImage}
                  source={{ uri: instance.media_url }}
                />
                <Text style={styles.champHeaderText}>
                  {instance.championship[0].championship_description}
                </Text>
              </View>
            </View>
          ))
        )}
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
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 31,
    paddingLeft: 15,
  },
  subHead: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  eventTextChamp: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 5,
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
});
