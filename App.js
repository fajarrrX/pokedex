import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, OnBoardingScreen } from "./src/screens";
import { StatusBarComponent } from "./src/components";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBarComponent backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
