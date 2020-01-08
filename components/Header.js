import React from "react";
import { StyleSheet, Text } from "react-native";

import CurvedView from "./CurvedView";
import { Typography } from "../styles";

const Header = ({ title, style }) => {
  return (
    <CurvedView size="small" style={style}>
      <Text style={styles.header}>{title}</Text>
    </CurvedView>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Typography.mainHeader
  }
});

export default Header;
