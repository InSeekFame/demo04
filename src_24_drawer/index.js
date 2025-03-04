import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from '@react-navigation/elements';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeScreen () {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title={"open drawer"} onPressIn={() => prop.navigation.navigation('Home')}></Button>
        </View>
    );
}

function NewsScreen () {
    return (
        <View>
            <Text>NewsScreen</Text>
        </View>
    );
}

export default class index extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
      </Drawer.Navigator>

    // <View>
    //         <Text>NewsScreen</Text>
    //     </View>
    )
  }
}

const styles = StyleSheet.create({})
