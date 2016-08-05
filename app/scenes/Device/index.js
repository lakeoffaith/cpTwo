/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import DeviceTabOne from './DeviceTabOne'
import DeviceTabTwo from './DeviceTabTwo'
const scrollTabHeight=Dimensions.get('window').height-90;
export default class App extends React.Component{
    render(){
        return(
            <ScrollableTabView style={{height:scrollTabHeight}}>
                <DeviceTabOne tabLabel="应用状态"/>
                <DeviceTabTwo tabLabel="物资设备列表"/>
            </ScrollableTabView>
        );
    }
}