import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch } from "react-native";

import { useAuth } from "../auth/context";
import Header from "../../components/Header";
import Button from "../../components/Button";
import HorizontalLine from "../../components/HorizontalLine";
import { Containers, Spacing, Typography } from "../../styles";

const SettingsScreen = () => {
  const { user, logout } = useAuth();
  const [value, setValue] = useState(false);

  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <Image source={{ uri: user.photoURL }} style={styles.avatar} />
      <Text style={styles.username}>{user.displayName}</Text>
      <Button title="Se déconnecter" onPress={logout} block />
      <HorizontalLine />
      <Switch
        value={value}
        onValueChange={v => {
          setValue(v);
        }}
      />
      <HorizontalLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Containers.base
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: Spacing.base
  },
  username: {
    ...Typography.mainHeader,
    marginBottom: Spacing.base
  }
});

export default SettingsScreen;
