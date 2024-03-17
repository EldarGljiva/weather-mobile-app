import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const Box = (props) => {
  const { day, typeOfWeather } = props;
  return (
    <SafeAreaView style={styles.fivedaysforecast}>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <View style={styles.flexColumn}>
            <Text>{day}</Text>
          </View>
          <View style={styles.flexColumn}>
            <Feather name="sun"></Feather>
          </View>
          <View style={styles.flexColumn}>
            <Text>{typeOfWeather}</Text>
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
    justifyContent: "center",
  },
  fivedaysforecast: {
    flex: 1,
    backgroundColor: "lightblue",
    width: "100%",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
    padding: 30,
    borderRadius: 40,
    backgroundColor: "yellow",
  },
  flexColumn: {
    flex: 1,
    alignItems: "center",
  },
});

export default Box;
