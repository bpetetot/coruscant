import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

import Button from "../../components/Button";

export default function LoginScreen({ login, loading }) {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Signin with Google" block onPress={() => login()} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  }
});
