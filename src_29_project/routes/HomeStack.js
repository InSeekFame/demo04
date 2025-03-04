
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home'


const Stack = createNativeStackNavigator();

export default class HomeStack extends Component {
  render() {
    return (
        // <Stack.Navigator
        //     initialRouteName="Home"
        //     screenOptions={{
        //     headerStyle: { backgroundColor: 'tomato' },
        //     headerRight: () => (
        //         <Button onPress={() => alert('This is a button!')}>Info</Button>
        //     ),
        // }}
        // >
        //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} />
        // </Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} 
        options={{ 
            title: '首页'
        }} 
        />
    )
  }
}

const styles = StyleSheet.create({})


