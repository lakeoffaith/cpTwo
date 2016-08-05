/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {DeviceShouhuanData,DevicePDAData,DevicePhoneData} from '../../data'
import LineChart from '../../chart/LineChart'
export default class DeviceTabOne extends React.Component{
    render(){
        return(
          <View>
              <View style={styles.chartPanel}>
                  <LineChart  style={{flex:1}} data={DeviceShouhuanData}/>
              </View>
              <View style={styles.chartPanel}>
                  <LineChart  style={{flex:1}} data={DevicePDAData}/>
              </View>
              <View style={styles.chartPanel}>
                  <LineChart  style={{flex:1}} data={DevicePhoneData}/>
              </View>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    chartPanel:{
        backgroundColor:'yellow',
        margin:5,
        height:120,

    }
});