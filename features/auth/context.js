import React, { useState, useEffect, useContext } from "react";
import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from "react-native-dotenv";
import * as Google from "expo-google-app-auth";
import firebase from "firebase/app";
import LoginScreen from "./LoginScreen";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  const login = async () => {
    setLoading(true);
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
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const logout = async () => {
    setUser(null);
    await firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {user ? children : <LoginScreen login={login} loading={loading} />}
    </AuthContext.Provider>
  );
};
