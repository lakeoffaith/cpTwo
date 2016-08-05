/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    requireNativeComponent
} from 'react-native'
import BarChart from '../../chart/BarChart'
import LineChart from '../../chart/LineChart'
import {ApBarData,ApLineData} from '../../data'
export default class ApTabOne extends React.Component{
    render(){
        return(
          <View>
             <View style={styles.chartPanel}>
                 <View>
                     <Text>实时连接数量比</Text>
                     </View>

                 <BarChart style={{flex:1}} data={ApBarData}/>
             </View>
              <View style={styles.chartPanel}>
                  <View>
                  <Text>一天内的连接总数的折线图</Text>
                      </View>
                  <LineChart style={{flex:1}} data={ApLineData} />
              </View>
          </View>
        );
    }
}

const styles=StyleSheet.create({
    chartPanel:{
        backgroundColor:'gray',
        height:200,
        margin:5
    }
});