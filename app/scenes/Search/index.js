/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import {MKButton,MKColor} from 'react-native-material-kit'
const ColoredRaisedButton = MKButton.coloredButton()
    .withText('查找')
    .withStyle({
        marginTop:10,
        width:80,
        borderColor:'gray'
    })
    .withOnPress(() => {
        console.log("Hi, it's a colored button!");
    })
    .build();
export default class People extends React.Component{
    render(){
        return(
          <View style={styles.container}>
                    <TextInput
                        style={{width:150}}
                        placeholder="患者/设备/Ap"
                        palceholderTextColor="gray"
                    />
                    <ColoredRaisedButton />
          </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
});