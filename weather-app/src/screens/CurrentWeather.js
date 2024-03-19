import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import InfoBox from "../components/InfoBox";
import Footer from "../components/Footer";
// import { SearchBar } from "react-native-elements";

const CurrentWeather = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrCurrentWeatherer}>
      <ImageBackground
        source={require("../../assets/images/sky.png")}
        style={[
          styles.background,
          {
            /* This code makes background image not move once we press on TextInput */
          },
          {
            position: "absolute",
            left: 0,
            top: 0,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          },
        ]}
      >
        <View style={styles.container}>
          {/* Search bar here */}
          <TextInput style={styles.input} placeholder="Search"></TextInput>
          {/* Starting Information */}
          <Text style={styles.cityName}>Berlin</Text>
          <Feather
            style={styles.weatherIcon}
            name="sun"
            size={100}
            color="black"
          />
          <Text style={styles.temperature}>27°</Text>
          <Text style={styles.day}>Monday, Today</Text>
          {/* infoBox.js */}
          <InfoBox
            wind={2 + "km/h"}
            humidity={33 + "%"}
            chanceOfRain={40 + "%"}
          />
          {/* Footer */}
          <Footer navigation={navigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wrCurrentWeatherer: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  cityName: {
    fontSize: 30,
    color: "white",
  },
  weatherIcon: {
    fontSize: 100,
    color: "yellow",
  },
  temperature: {
    fontSize: 50,
    color: "white",
  },
  day: {
    fontSize: 20,
    marginBottom: 10,
    color: "#c7c7c7",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  input: {
    fontSize: 20,
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: "white",
    width: "50%",
  },
});

export default CurrentWeather;
