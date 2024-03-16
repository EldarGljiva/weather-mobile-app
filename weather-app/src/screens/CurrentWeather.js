import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const CurrentWeather = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrCurrentWeatherer}>
      <View
        style={[
          styles.container,
          { backgroundColor: "linear-gradient(90deg, pink, #ffb8d1)" },
        ]}
      >
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
        <View style={styles.flexRow}>
          <View style={{ flex: 1 }}>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
            </View>
            <View style={styles.flexRow}>
              <Text>Hello</Text>
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
            <Button
              title="5 day Forecast"
              onPress={() => navigation.navigate("")}
            />
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
    backgroundColor: "#CFF1E5",
    width: "90%",
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#1C5F48",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
export default CurrentWeather;
