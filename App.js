import React from "react";
import Feed from "./screens/feed";
import Details from "./screens/details";
import Contacts from "./screens/drawer/Contacts";
import Favorites from "./screens/drawer/Favorites";
import Settings from "./screens/drawer/Settings";

import {
  AppearanceProvider,
  useColorScheme,
  Appearance,
} from "react-native-appearance";

import Tab1 from "./screens/tabs/Tab1";
import Tab2 from "./screens/tabs/Tab2";
import Tab3 from "./screens/tabs/Tab3";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

Appearance.getColorScheme();

export default function App() {
  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: "My Feed",
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Details Screen",
        }}
      />
      <Stack.Screen name="Top Tabs" children={createTopTabs} />
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs} />
    </Stack.Navigator>
  );

  createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{ title: "Hello" }}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };
  createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == "dark" ? MyTheme : MyTheme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={Contacts} />
          <Drawer.Screen name="Favourite" component={Favorites} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
