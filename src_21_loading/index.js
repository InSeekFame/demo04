import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.loading]}>
            <ActivityIndicator color={'white'}></ActivityIndicator>
            <Text style={[styles.loadingTitle]}>加载中...</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        backgroundColor: '#999',
        height: 100,
        width: 140,
        borderRadius: 20,
        padding: 20,
    },
    loadingTitle: {
        textAlign: 'center',
        color: 'white',
        marginLeft: 10,
        marginTop: 20,
    }
})
