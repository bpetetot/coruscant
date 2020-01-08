import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useAuth } from "../auth/context";
import CurvedView from "../../components/CurvedView";
import { Containers, Typography } from "../../styles";

const DashboardScreen = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <CurvedView size="large" imageUri={user.photoURL} withGradient>
        <Text style={styles.header}>Dashboard</Text>
      </CurvedView>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    ...Typography.mainHeader
  },
  container: {
    ...Containers.base
  }
});

export default DashboardScreen;
