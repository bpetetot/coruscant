import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { useAuth } from "../auth/context";
import Header from "../../components/Header";
import CurvedView from "../../components/CurvedView";
import { Containers, Typography } from "../../styles";

const ProfileScreen = () => {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <CurvedView imageUri={user.photoURL} />
        <Header title="Profile" style={{ position: "absolute" }} />
      </View>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Containers.base
  }
});

export default ProfileScreen;
