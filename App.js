import React from "react";
import Feed from "./screens/feed";
import Details from "./screens/details";
import Contacts from "./screens/drawer/Contacts";
import Favorites from "./screens/drawer/Favorites";
import Settings from "./screens/drawer/Settings";

import Tab1 from "./screens/tabs/Tab1";
import Tab2 from "./screens/tabs/Tab2";
import Tab3 from "./screens/tabs/Tab3";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default function App() {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Contacts" component={Contacts} />
        <Drawer.Screen name="Favourite" component={Favorites} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
