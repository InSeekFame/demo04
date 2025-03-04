import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function HomeScreen () {
    return (
        <View>
            <Text>HomeScreen</Text>
            {/* <Button title={"open drawer"} onPressIn={() => prop.navigation.navigation('Home')}></Button> */}
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

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    );
  }

export default class index extends Component {
  render() {
    return (
    //   <View>
    //     <Text> textInComponent </Text>
    //   </View>
<Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({})
