import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
      <Stack screenOptions={{headerShown:false}} >
        <Stack.Screen name="(tab)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="[missing]" options={{title:'404'}} />
      </Stack>
  );
};

export default RootLayout;
