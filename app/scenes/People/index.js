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
import PeopleTabOne from './PeopleTabOne'
import PeopleTabTwo from './PeopleTabTwo'
const scrollTabHeight=Dimensions.get('window').height-90;
export default class People extends React.Component{
    render(){
        return(
            <ScrollableTabView style={{height:scrollTabHeight}}>
                <PeopleTabOne tabLabel="医院密集度分布"/>
                <PeopleTabTwo tabLabel="人员查找定位"/>
            </ScrollableTabView>
        );
    }
}