import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch } from "react-native";

import { useAuth } from "../auth/context";
import CurvedView from "../../components/CurvedView";
import Button from "../../components/Button";

const SettingsScreen = () => {
  const { user, logout } = useAuth();
  const [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <CurvedView size="small">
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Settings
        </Text>
      </CurvedView>
      <Image
        source={{ uri: user.photoURL }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          margin: 20
        }}
      />
      <Text style={{ marginBottom: 20, fontSize: 25, fontWeight: "bold" }}>
        {user.displayName}
      </Text>
      <Button title="Se déconnecter" onPress={logout} block />
      <View
        style={{
          width: "100%",
          margin: 20,
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
      />
      <Switch
        value={value}
        onValueChange={v => {
          setValue(v);
        }}
      />
      <View
        style={{
          width: "100%",
          margin: 20,
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  }
});

export default SettingsScreen;
