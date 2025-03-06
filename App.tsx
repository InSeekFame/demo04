import React, {Component} from 'react';
// import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View } from 'react-native'
// import Index from './src_15_Picker'
// import Index from './src_21_loading'
// import Index from './src_22_StackNavigator'
// import Index from './src_23_BottomTab'
// import Index from './src_28_API'
// import Index from './scr_23_icons'
// import Index from './scr_23_TestTabs'
// import Index from './src_test_navigator'
// import Index from './src_test_navigator/tab'
// import Index from './src_24_drawer'
// import Index from './src_25_meterial_tap_tabs'
import Index from './src_29_project/routes'


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Index />
      </NavigationContainer>
      // <Index/>
    )
  }
}

const styles = StyleSheet.create({})
