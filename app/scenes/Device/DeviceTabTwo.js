/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {DeviceStorageBarData} from '../../data'
import BarChart from '../../chart/BarChart'
export default class DeviceTabTwo extends React.Component{
    render(){
        return(
          <View>
              <View style={styles.errorContainer}>
                  <View style={styles.item}>
                      <Text style={styles.title}>医疗床A 移动异常</Text>
                      <Text>由一号病区107移动到二号病区201</Text>
                  </View>

              </View>
              <View style={styles.chartContainer}>
                  <BarChart style={{flex:1}} data={DeviceStorageBarData} />
              </View>

          </View>
        );
    }
}
const styles=StyleSheet.create({
    errorContainer:{
      margin:5,
        height:100
    },
    chartContainer:{
        margin:5,
        height:200,
    },
    item:{
      height:70,
        marginBottom:5,
        paddingBottom:5,
        borderBottomWidth:1
    },
    title:{
        fontSize:18,
        marginBottom:5,
        color:'blue'
    }
})