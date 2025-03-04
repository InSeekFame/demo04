/*prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';

const App = () => {
    const [selectedValue, setSelectedValue] = React.useState("white");
    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}
                style={{ fontFamily: 'PingFang SC' }} // 指定支持中文的字体
            >
                <Picker.Item label="白色" value="white" />
                <Picker.Item label="黑色" value="black" />
            </Picker>
            {/* <Text>你选择的颜色是: {selectedValue}</Text> */}
        </View>
    );
};
export default App;