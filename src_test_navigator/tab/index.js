import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


function HomeScreen() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

function StackHome() {
    return (
        //<Stack.Navigator>
            <Stack.Screen name='Home' component={ HomeScreen } />
        //</Stack.Navigator>
        
    );
}

function NewsScreen() {
    return (
        <View>
            <Text>News</Text>
        </View>
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={StackHome}></Tab.Screen>
            <Tab.Screen name='News' component={NewsScreen}></Tab.Screen>
        </Tab.Navigator>
    );
}

export default class index extends Component {
  render() {
    return (
      <HomeTabs />
    // <Tab.Navigator>
    //         <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
    //         <Tab.Screen name='News' component={NewsScreen}></Tab.Screen>
    //     </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
