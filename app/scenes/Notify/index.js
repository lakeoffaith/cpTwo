/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Notify extends React.Component{
    render(){
        return(
          <View>
              <View style={styles.item}>
                  <Text style={styles.title}>
                      文章推送
                  </Text>
                  <Text>
                      主题：本院开展下乡医助活动
                  </Text>
                  <Text>
                      发表时间：2016-06-01
                  </Text>
              </View>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    item:{
        margin:5,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'green'
    },
    title:{
        marginBottom:5,
        fontSize:20,
    }
});