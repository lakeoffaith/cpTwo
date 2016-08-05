/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {PeopleBarData} from '../../data'
import BarChart from '../../chart/BarChart'
export default class PeopleTabOne extends React.Component{
    render(){
        return(
          <View>
              <View style={styles.panelContainer}>
                  <BarChart style={{flex:1}} data={PeopleBarData}/>
              </View>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    panelContainer:{
        margin:5,
        height:180
    }
})