import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

import firebase from "firebase";

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        console.log("We are authenticated now!");
        navigation.navigate("DashboardScreen");
      } else {
        console.log("We are NOT authenticated!");
        navigation.navigate("LoginScreen");
      }
    });

    return unsubscribe;
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
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
