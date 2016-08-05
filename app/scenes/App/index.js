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
import ApTabOne from './ApTabOne'
import ApTabTwo from './ApTabTwo'
import ApTabThree from './ApTabThree'
const scrollTabHeight=Dimensions.get('window').height-90;
export default class App extends React.Component{
    render(){
        return(
            <ScrollableTabView style={{height:scrollTabHeight}}>
                <ApTabOne tabLabel="Ap运行状态"/>
                <ApTabTwo tabLabel="Ap列表"/>
                <ApTabThree tabLabel="Ap流量设置"/>
            </ScrollableTabView>
        );
    }
}