import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useAuth } from "../auth/context";
import CurvedView from "../../components/CurvedView";

const DashboardScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <CurvedView size="large" imageUri={user.photoURL}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Dashboard
        </Text>
      </CurvedView>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  }
});

export default DashboardScreen;
