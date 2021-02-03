import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Device from "expo-device";

//main screens
import NewsScreen from "./screens/NewsScreen";
import RacesScreen from "./screens/RacesScreen";
import ChampionshipsScreen from "./screens/ChampionshipsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createBottomTabNavigator();
const darkTheme = {
  dark: true,
  colors: {
    background: "#313e4e",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={darkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //customises each tab
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "News") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            } else if (route.name === "Races") {
              iconName = focused ? "bicycle" : "bicycle-outline";
            } else if (route.name === "Championships") {
              iconName = focused ? "trophy" : "trophy-outline";
            } else if (route.name === "Favourites") {
              iconName = focused ? "star" : "star-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={35} color={color} />;
          },
          title: "",
        })}
        tabBarOptions={{
          activeTintColor: "#F2771A",
          inactiveTintColor: "#c6c8cc",
          style: {
            //accounting for extra bottom space for swipe gestures on no home button iphones
            height:
              Platform.OS === "android"
                ? 60
                : Device.modelName === "iPhone 7"
                ? 60
                : 100,
            padding: Platform.OS === "android" ? 15 : 10,
            backgroundColor: "#262f3b",
          },
        }}
      >
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Races" component={RacesScreen} />
        <Tab.Screen name="Championships" component={ChampionshipsScreen} />
        <Tab.Screen name="Favourites" component={FavouritesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
