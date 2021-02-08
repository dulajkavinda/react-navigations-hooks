import React from "react";
import styles from "./styles/index";
import { View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function Feed() {
  const navigation = useNavigation();
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Navigation Drawer</Text>
      <Button
        title="Go to Feed"
        onPress={() =>
          navigation.navigate("Details", { screenName: "Details Screen 1" })
        }
      />
    </View>
  );
}
