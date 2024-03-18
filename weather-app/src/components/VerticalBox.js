import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const VerticalBox = (props) => {
  const { temp, day } = props;
  return (
    <LinearGradient
      colors={["#245e8a", "#226ba3", "#90bed4"]}
      style={{
        padding: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
      }}
    >
      <Text style={{ marginBottom: 10, color: "white" }}>{temp}</Text>
      <Feather
        name="sun"
        style={{ color: "white", marginBottom: 10 }}
      ></Feather>
      <Text style={{ marginBottom: 10, color: "white" }}>{day}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
export default VerticalBox;
