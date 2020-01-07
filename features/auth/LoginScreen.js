import React from "react";
import { StyleSheet, Button, View, ActivityIndicator } from "react-native";

export default function LoginScreen({ login, loading }) {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Signin with Google" onPress={() => login()} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
