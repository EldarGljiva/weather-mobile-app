import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import VerticalBox from "./VerticalBox.js";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      {/* Footer vertical boxes */}
      <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
        <VerticalBox temp="27°" day="Mon" />
        <VerticalBox temp="27°" day="Mon" />
        <VerticalBox temp="27°" day="Mon" />
      </View>
      <View
        style={[styles.flexRow, { justifyContent: "center", marginTop: 30 }]}
      >
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("5 Day Forecast")}
        >
          <Text style={styles.buttonText}>5 Days Forecast</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230, 0.8)",
    borderWidth: 1,
    borderColor: "white",
    width: "90%",
    padding: 10,
    marginTop: 10,
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
    backgroundColor: "#FFD700",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#333",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
export default Footer;
