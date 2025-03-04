import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from '@react-navigation/elements'
import { createStaticNavigation, useNavigation } from '@react-navigation/native'

/*
官方文档
https://reactnavigation.org/docs/headers
*/

const Stack = createNativeStackNavigator()

function HomeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button onPressIn={ () => navigation.navigate('News') }>
                go to news
            </Button>
        </View>
    );
}

function NewsScreen() {
    return (
        <View>
            <Text>NewsScreen</Text>
        </View>
    );
}

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator >
        <Stack.Screen name='Home' component={ HomeScreen } 
            options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
        />
        <Stack.Screen name='News' component={ NewsScreen } />
      </Stack.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
