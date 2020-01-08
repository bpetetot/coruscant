import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import { Containers, Typography } from "../../styles";
import Button from "../../components/Button";
import CurvedView from "../../components/CurvedView";

export default function LoginScreen({ login, loading }) {
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <CurvedView size="large" withGradient>
        <Text style={styles.header}>Conference Hall</Text>
      </CurvedView>
      <View style={styles.centered}>
        <Button title="Signin with Google" block onPress={login} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Containers.base
  },
  header: {
    ...Typography.mainHeader
  },
  centered: {
    ...Containers.centered
  }
});
