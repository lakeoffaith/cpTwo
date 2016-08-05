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
import {Icon} from 'react-native-material-design'
import {MKProgress} from 'react-native-material-kit'
export default class ApTabTwo extends React.Component{
    render(){
        return(
          <View>
                <View style={styles.itemPanel}>
                    <View style={[styles.item,{borderColor:'red'}]}>
                        <Text style={styles.titleText}>Ap01</Text>
                        <Text>地址：护士楼一区103</Text>

                        <View style={{marginTop:20}}>
                            <View style={styles.showState}><Text>发生故障</Text></View>
                            <MKProgress progress={0.2} progressColor="red"/>
                        </View>

                    </View>
                    <View style={[styles.item,{borderColor:'green'}]}>
                        <Text style={styles.titleText}>Ap02</Text>
                        <Text>地址：护士楼一区303</Text>

                        <View style={{marginTop:20}}>
                            <View style={styles.showState}><Text>运行正常</Text></View>
                            <MKProgress.Indeterminate  progressColor="green"/>
                        </View>

                    </View>
                </View>
              <View style={styles.itemPanel}>
                  <View style={[styles.item,{borderColor:'green'}]}>
                      <Text style={styles.titleText}>Ap04</Text>
                      <Text>地址：护士楼3区103</Text>

                      <View style={{marginTop:20}}>
                          <View style={styles.showState}><Text>运行正常</Text></View>
                          <MKProgress.Indeterminate  progressColor="green"/>
                      </View>

                  </View>
                  <View style={[styles.item,{borderColor:'green'}]}>
                      <Text style={styles.titleText}>Ap06</Text>
                      <Text>地址：住院楼103</Text>

                      <View style={{marginTop:20}}>
                          <View style={styles.showState}><Text>运行正常</Text></View>
                          <MKProgress.Indeterminate  progressColor="green"/>
                      </View>

                  </View>
              </View>
              <View style={styles.itemPanel}>
                  <View style={[styles.item,{borderColor:'green'}]}>
                      <Text style={styles.titleText}>Ap11</Text>
                      <Text>地址：住院楼403</Text>

                      <View style={{marginTop:20}}>
                          <View style={styles.showState}><Text>运行正常</Text></View>
                          <MKProgress.Indeterminate  progressColor="green"/>
                      </View>

                  </View>
                  <View style={[styles.item,{borderColor:'green'}]}>
                      <Text style={styles.titleText}>Ap15</Text>
                      <Text>地址：急诊楼403</Text>

                      <View style={{marginTop:20}}>
                          <View style={styles.showState}><Text>运行正常</Text></View>
                          <MKProgress.Indeterminate  progressColor="green"/>
                      </View>

                  </View>
              </View>
          </View>
        );
    }

}

const styles=StyleSheet.create({
    itemPanel:{
        marginTop:20,
        height:140,
        margin:5,
        flexDirection:'row'
    },
    item:{
        flex:1,
        backgroundColor:'gray',
        margin:5,
        borderWidth:2
    },
    titleText:{
        fontSize:20,
        marginTop:10,
        marginBottom:10
    },
    showState:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:5,
    }
});