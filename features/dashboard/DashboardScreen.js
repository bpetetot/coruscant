import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import { useAuth } from "../auth/context";

const DashboardScreen = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text>Dashboard screen</Text>
      <Button title="Signout" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DashboardScreen;
