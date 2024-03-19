import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import Box from "../components/Box";

const FiveDaysForecast = ({}) => {
  return (
    <View style={styles.container}>
      <Box day="Monday" typeOfWeather="sunny"></Box>
      <Box day="Monday" typeOfWeather="sunny"></Box>
      <Box day="Monday" typeOfWeather="sunny"></Box>
      <Box day="Monday" typeOfWeather="sunny"></Box>
      <Box day="Monday" typeOfWeather="sunny"></Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
export default FiveDaysForecast;
