import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

import firebase from "firebase";

export default function DashboardScreen({ navigation }) {
  const signOut = () => {
    firebase.auth().signOut();
    navigation.navigate("LoadingScreen");
  };

  return (
    <View style={styles.container}>
      <Text>Dashboard screen</Text>
      <Button title="Signout" onPress={signOut} />
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
