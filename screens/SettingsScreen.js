import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View
        style={{
          borderBottomColor: "#c6c8cc",
          borderBottomWidth: 3,
          borderRadius: 8,
        }}
      >
        <Image
          source={{
            uri:
              "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/7/19/ijpo5u0yetb5vhrwmq6h/miguel-oliveira-portrait-losail",
          }}
          style={{
            height: 200,
            width: 500,
          }}
        />
        <Image
          source={{
            uri:
              "https://1000logos.net/wp-content/uploads/2020/02/logo-KTM.png",
          }}
          style={{
            height: 60,
            width: 90,
            position: "absolute",
            top: 170,
            borderRadius: 20,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            textShadowColor: "#262f3b",
            textShadowRadius: 7,
            textShadowOffset: { width: 1, height: 1 },
            fontWeight: "bold",
            fontSize: RFValue(30, 1000),
            fontStyle: "normal",
            marginLeft: RFValue(380, 1000),
            top: 174,
          }}
        >
          Miguel
        </Text>
        <Text
          style={{
            textShadowColor: "#262f3b",
            textShadowRadius: 1,
            textShadowOffset: { width: 1, height: 1 },
            position: "absolute",
            color: "white",
            fontWeight: "bold",
            fontSize: RFValue(63, 1000),
            fontStyle: "italic",
            marginLeft: RFValue(280, 1000),
            top: 190,
          }}
        >
          Oliveira{"\n"}
        </Text>
        <Text
          style={{
            marginLeft: RFValue(360, 1000),
            top: 245,
            position: "absolute",
            fontWeight: "bold",
            color: "#c6c8cc",
            fontSize: RFValue(20, 1000),
          }}
        >
          04-01-1995
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 30,
        }}
      >
        <Image
          source={{
            uri:
              "https://pixelz.cc/wp-content/uploads/2018/11/portugal-flag-uhd-4k-wallpaper.jpg",
          }}
          style={{
            height: 60,
            width: 90,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
          CONTENT
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.facebook.com/miguel88oliveira")
          }
          TouchableOpacity={0.1}
        >
          <Image
            source={{
              uri: "https://i.imgur.com/lKa7abm.png",
            }}
            style={{
              height: 35,
              width: "84%",
              marginBottom: 2,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL("https://www.instagram.com/88migueloliveira/?hl=en")
          }
          TouchableOpacity={0.1}
        >
          <Image
            source={{
              uri: "https://i.imgur.com/2dBwd6D.png",
            }}
            style={{
              height: 35,
              width: "95%",
              marginBottom: 2,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL("https://twitter.com/_moliveira88")}
          TouchableOpacity={0.1}
        >
          <Image
            source={{
              uri: "https://i.imgur.com/KyBn4mS.png",
            }}
            style={{
              height: 35,
              width: "101%",
              marginBottom: 2,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
