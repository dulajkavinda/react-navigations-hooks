import React from "react";
import styles from "./styles/index";
import { View, Text, Button } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";
export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenName}</Text>
      <Button
        title="View Bottom Tabs"
        onPress={() => navigation.navigate("Bottom Tabs")}
      />
      <Button
        title="View Top Tabs"
        onPress={() => navigation.navigate("Top Tabs")}
      />
    </View>
  );
}
