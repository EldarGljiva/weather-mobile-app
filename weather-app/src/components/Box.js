import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Box = (props) => {
  const { day, typeOfWeather } = props;
  return (
    <SafeAreaView style={styles.fivedaysforecast}>
      <LinearGradient
        colors={["#245e8a", "#226ba3", "#90bed4"]}
        style={styles.container}
      >
        <View style={styles.flexRow}>
          <View style={styles.item}>
            <Text>{day}</Text>
          </View>
          <View style={styles.item}>
            <Feather name="sun" size={24} color="white" />
          </View>
          <View style={styles.item}>
            <Text>{typeOfWeather}</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 50,
    padding: 10,
  },
  fivedaysforecast: {
    flex: 1,
    width: "80%",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
});

export default Box;
