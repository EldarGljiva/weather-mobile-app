import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Box from "../components/Box";
import { Feather } from "@expo/vector-icons";

const FiveDayForecast = ({}) => {
  return (
    <SafeAreaView style={styles.wrCurrentWeather}>
      <View style={styles.container}>
        <Box day="Monday" typeOfWeather="sunny"></Box>
        <Box day="Monday" typeOfWeather="sunny"></Box>
        <Box day="Monday" typeOfWeather="sunny"></Box>
        <Box day="Monday" typeOfWeather="sunny"></Box>
        <Box day="Monday" typeOfWeather="sunny"></Box>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Adding this will center the text
  },
  wrCurrentWeather: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
export default FiveDayForecast;
