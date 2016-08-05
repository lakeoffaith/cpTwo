/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class Task extends React.Component{
    render(){
        return(
          <View>
              <View style={styles.item}>
                  <Text style={styles.title}>
                      设备移动异常
                  </Text>
                  <Text>指派人：万大利</Text>
                  <Text>
                      任务：去护士病房查看仪器A501的移动情况
                  </Text>
              </View>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    item:{
        margin:5,
        paddingBottom:5,
        borderBottomWidth:1,
        borderColor:'green'
    },
    title:{
        marginBottom:5,
        fontSize:20,
    }
});