import React from 'react'
import {
  View,
  StyleSheet,
  Text,
    TouchableOpacity
} from 'react-native'
import t from 'tcomb-form-native'
const Form=t.form.Form;
const LoginDomain=t.struct({
  name:t.String,
  password:t.String  // an optional string
});
const options={}
export default class Login extends React.Component{
  render(){
    return (
        <View>
          <View style={styles.centerContainer}>
                <Text style={{fontSize:20}}>登录</Text>
           </View>
          <Form
              ref="form"
              type={LoginDomain}
              options={options}
          />
          <View style={styles.centerContainer}>
            <TouchableOpacity >
                <View style={{width:100,height:50,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                  <Text style={{fontSize:25}}>登录</Text>
                  </View>

            </TouchableOpacity>
          </View>
        </View>
    )
  }
}

const styles=StyleSheet.create({
  centerContainer:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
  }
});