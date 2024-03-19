import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const InfoBox = (props) => {
  const { wind, humidity, chanceOfRain } = props;
  return (
    <View
      style={[
        styles.flexRow,
        {
          backgroundColor: "rgba(34, 107, 163, 0.7)",
          borderRadius: 30,
          borderColor: "white",
          borderWidth: 1,
        },
      ]}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.flexRow}>
          <Feather name="wind" size={20} color="white" />
        </View>
        <View style={styles.flexRow}>
          <Text style={{ color: "white", fontSize: 17 }}>{wind}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={{ color: "white", fontSize: 19 }}>Wind</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.flexRow}>
          <Feather name="droplet" size={20} color="white" />
        </View>
        <View style={styles.flexRow}>
          <Text style={{ color: "white", fontSize: 17 }}>{humidity}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={{ color: "white", fontSize: 19 }}>Humidity</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.flexRow}>
          <Feather name="umbrella" size={20} color="white" />
        </View>
        <View style={styles.flexRow}>
          <Text style={{ color: "white", fontSize: 17 }}>{chanceOfRain}</Text>
        </View>
        <View style={styles.flexRow}>
          <Text style={{ color: "white", fontSize: 19 }}>Rain</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    padding: 10,
  },
});
export default InfoBox;
