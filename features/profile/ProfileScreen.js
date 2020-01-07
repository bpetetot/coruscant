import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { useAuth } from "../auth/context";
import CurvedView from "../../components/CurvedView";
import Button from "../../components/Button";

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <CurvedView size="small">
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Paramètres
        </Text>
      </CurvedView>
      <Image
        source={{ uri: user.photoURL }}
        style={{
          width: 200,
          height: 200
        }}
      />
      <Text>{user.displayName}</Text>
      <Button title="Se déconnecter" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});

export default ProfileScreen;
