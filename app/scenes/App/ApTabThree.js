/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import {MKSlider} from 'react-native-material-kit'
import {ApTransData} from '../../data'
import LineChart from '../../chart/LineChart'
export default class ApTabThree extends React.Component{
    constructor(){
        super();
        this.state={
            curValue1:40,
            curValue2:50,
            curValue3:60
        }
    }
    render(){
        return(
          <View>
              <View style={styles.chartPanel}>
                    <View>
                        <Text>传输速率的折线图</Text>
                        </View>
                    <LineChart style={{flex:1}} data={ApTransData} />
              </View>
              <View style={styles.chartPanel}>
                  <View style={styles.setItem}>
                            <View style={{flex:1}}>
                                    <Text>手机下载速度上限：{this.state.curValue1}</Text>
                                </View>
                                <MKSlider style={styles.slider} onChange={(curValue)=>this.setState({curValue1:curValue.toFixed(2)})}/>



                  </View>
                  <View style={styles.setItem}>
                      <View style={{flex:1}}><Text>电脑下载速度上限：{this.state.curValue2}</Text></View>
                      <MKSlider style={styles.slider} onChange={(curValue)=>this.setState({curValue2:curValue.toFixed(2)})}/>
                  </View>
                  <View style={styles.setItem}>
                      <View style={{flex:1}}><Text>PDA下载速度上限：{this.state.curValue3}</Text></View>
                      <MKSlider style={styles.slider} onChange={(curValue)=>this.setState({curValue3:curValue.toFixed(2)})}/>
                  </View>
              </View>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    chartPanel:{
        marginTop:20,
        height:200,
        margin:5
    },
    setItem:{
        flexDirection:'row',
        marginBottom:10,
        borderBottomWidth:1,
        height:40,
    },
    slider:{
        width:120
    }
});