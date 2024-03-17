import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
// import { SearchBar } from "react-native-elements";

const CurrentWeather = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrCurrentWeatherer}>
      <View style={[styles.container, { backgroundColor: "#287fd7" }]}>
        <Text style={styles.cityName}>Berlin</Text>

        <Feather
          style={styles.weatherIcon}
          name="sun"
          size={100}
          color="black"
        />
        <Text style={styles.temperature}>27°</Text>
        <Text style={styles.day}>Monday, Today</Text>
        {/* 1 row 3 columns each having 3 rows */}
        <View
          style={[
            styles.flexRow,
            { backgroundColor: "#226ba3", borderRadius: 30 },
          ]}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.flexRow}>
              <Feather name="wind" size={20} color="white" />
            </View>
            <View style={styles.flexRow}>
              <Text style={{ color: "white" }}>15km/h</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={{ color: "white" }}>Wind</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.flexRow}>
              <Feather name="droplet" size={20} color="white" />
            </View>
            <View style={styles.flexRow}>
              <Text style={{ color: "white" }}>30%</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={{ color: "white" }}>Humidity</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.flexRow}>
              <Feather name="umbrella" size={20} color="white" />
            </View>
            <View style={styles.flexRow}>
              <Text style={{ color: "white" }}>87%</Text>
            </View>
            <View style={styles.flexRow}>
              <Text style={{ color: "white" }}>Chance of Rain</Text>
            </View>
          </View>
        </View>
        {/* 2 rows. first row has only text with flex-end. second row has big padding and View inside splitted in 2 */}
        <View style={styles.footer}>
          <View
            style={[
              styles.flexRow,
              { justifyContent: "space-between", marginTop: 30 },
            ]}
          >
            <View
              style={{
                backgroundColor: "#1C5F48",
                padding: 20,
                borderRadius: 30,
              }}
            >
              <Text style={{ marginBottom: 10 }}>First</Text>
              <Text style={{ marginBottom: 10 }}>First</Text>
              <Text style={{ marginBottom: 10 }}>First</Text>
            </View>
            <View
              style={{
                backgroundColor: "#1C5F48",
                padding: 20,
                borderRadius: 30,
              }}
            >
              <Text style={{ marginBottom: 10 }}>First</Text>
              <Text style={{ marginBottom: 10 }}>First</Text>
              <Text style={{ marginBottom: 10 }}>First</Text>
            </View>
            <View
              style={{
                backgroundColor: "#1C5F48",
                padding: 20,
                borderRadius: 30,
              }}
            >
              <Text style={{ marginBottom: 10 }}>First</Text>
              <Text style={{ marginBottom: 10 }}>First</Text>
              <Text style={{ marginBottom: 10 }}>First</Text>
            </View>
          </View>
          <View
            style={[
              styles.flexRow,
              { justifyContent: "center", marginTop: 30 },
            ]}
          >
            {/*
          <Button
              style={styles.button}
              title="5 day Forecast"
              onPress={() => navigation.navigate("5 Day Forecast")}
              titleStyle={{ color: "white" }} // Customize text color
              buttonStyle={{ backgroundColor: "black", borderRadius: 30 }}
            />
          */}
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("5 Day Forecast")}
            >
              <Text style={styles.buttonText}>5 Days Forecast</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
  cityName: {
    fontSize: 30,
  },
  weatherIcon: {
    marginTop: 20,
    fontSize: 100,
    color: "yellow",
  },
  temperature: {
    fontSize: 50,
  },
  day: {
    fontSize: 20,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "90%",
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1C5F48",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
export default CurrentWeather;
