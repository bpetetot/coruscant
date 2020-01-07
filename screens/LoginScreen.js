import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "react-native-dotenv";
import * as Google from "expo-google-app-auth";

import firebase from "firebase";

export default function LoginScreen({ navigation }) {
  const googleSignIn = async () => {
    try {
      const { type, accessToken, user } = await Google.logInAsync({
        iosClientId: IOS_CLIENT_ID,
        androidClientId: ANDROID_CLIENT_ID,
        scopes: ["profile", "email"]
      });
      if (type === "success") {
        console.log({ accessToken, user });
        const credential = firebase.auth.GoogleAuthProvider.credential(
          null,
          accessToken
        );
        await firebase
          .auth()
          .signInWithCredential(credential)
          .catch(error => {
            console.error(error);
          });
        navigation.navigate("DashboardScreen");
      } else {
        return { cancelled: true };
      }
    } catch (error) {
      console.log(error);
      return { error: true };
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Signin with Google" onPress={() => googleSignIn()} />
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
