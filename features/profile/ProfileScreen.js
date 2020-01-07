import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import CurvedView from "../../components/CurvedView";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <CurvedView size="small">
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Profile
        </Text>
      </CurvedView>
      <Text>Profile</Text>
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

export default ProfileScreen;
