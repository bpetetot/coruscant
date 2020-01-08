import React from "react";
import { StyleSheet, View } from "react-native";

import { Spacing } from "../styles";

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: "100%",
    margin: Spacing.base,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default HorizontalLine;
