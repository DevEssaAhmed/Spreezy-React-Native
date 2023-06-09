import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          initialRouteName: "home",
          headerShow: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

    // <View
    //   style={{
    //     paddingVertical:
    //       Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //   }}
    // >
    //   <SafeAreaView>
    //     <Text>Main</Text>
    //   </SafeAreaView>
    // </View>
  );
};

export default Main;
