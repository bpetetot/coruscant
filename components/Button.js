import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ title, onPress, block }) => (
  <TouchableHighlight
    onPress={onPress}
    style={{ borderRadius: 5, width: block ? "100%" : "auto" }}
  >
    <LinearGradient
      start={[0, 1]}
      end={[1, 0]}
      colors={["#43D4FF", "#38ABFD", "#2974FA"]}
      style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
    >
      <Text
        style={{
          backgroundColor: "transparent",
          fontSize: 15,
          color: "#fff"
        }}
      >
        {title}
      </Text>
    </LinearGradient>
  </TouchableHighlight>
);

export default Button;
