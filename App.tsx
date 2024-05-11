import 'react-native-gesture-handler';

import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import ChatbotScreen from './screens/ChatbotScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth-screen">
        <Stack.Screen name="Auth-screen" component={AuthScreen} />
        <Stack.Screen name="Chatbot-screen" component={ChatbotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
