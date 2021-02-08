import React from "react";
import styles from "./styles/index";
import { View, Text, Button } from "react-native";
export default function Details() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Details Screen</Text>
      <Button title="View Bottom Tabs" onPress={() => {}} />
      <Button title="View Top Tabs" onPress={() => {}} />
    </View>
  );
}
