import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function PilotScreen({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          title="go back"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name={"return-up-back-outline"} size={35} color={"white"} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.pilotHeader}>
        <Image
          style={styles.pilotImage}
          source={{
            uri:
              "https://radioalfa.net/wp-content/uploads/2020/08/migueloliveiravenceu.jpg",
          }}
        />
        <View>
          <Text style={styles.pilotInfo}>Miguel Oliveira</Text>
          <Text style={styles.pilotInfo}>1999-09-09</Text>
          <Text style={styles.pilotInfo}>Portugal</Text>
        </View>
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
  pilotHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
  },
  pilotImage: {
    height: 135,
    width: 135,
    borderRadius: 20,
    marginRight: 15,
  },
  pilotInfo: {
    fontSize: 20,
    color: "white",
    marginTop: 8,
  },
});
