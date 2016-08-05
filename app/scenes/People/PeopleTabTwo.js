/**
 * Created by ijoy on 16-7-8.
 */
import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableNativeFeedback
} from 'react-native'
import {getColor} from 'react-native-material-design/lib/helpers'
import {Icon} from 'react-native-material-design'
export default class PeopleTabTwo extends React.Component{
    constructor(){
        super();
        this.state={
            locationFlag:false
        }
    }
    showLocation(){
        this.setState({locationFlag:true});
    }
    render(){
        return(
          <View>
              <View style={styles.searchContainer}>
                    <View style={{width:200,flexDirection:'row'}} >
                        <TextInput
                            style={{height:40,width:140,marginRight:10,borderColor:'gray',borderWidth:1}}
                            placeholder="人员姓名"
                        />
                        <TouchableNativeFeedback
                            onPress={()=>this.showLocation()}
                            background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{width: 80, height: 40, backgroundColor: getColor('googleBlue300'),justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:24}}>查找</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
              </View>
              {this.state.locationFlag?
                  <View style={styles.panelContainer}>
                      <View style={{width:80,justifyContent:'center',alignItems:'center'}}>
                          <Image source={require('../../img/child.jpg')} style={{width:60,height:80}}></Image>
                      </View>
                      <View style={{flex:1}}>
                          <View style={{marginTop:20,marginLeft:10}}>
                                <Text><Text style={{fontWeight:'bold'}}>姓名：</Text>刘小宝</Text>
                                <Text><Text style={{fontWeight:'bold'}}>地址：</Text>婴儿室107</Text>
                          </View>
                      </View>
                      <View style={{width:40}}>
                          <View style={{marginTop:30}}>
                              <Icon  name="directions" color="googleBlue700"/>
                              <Text style={{marginTop:5,color:getColor('googleBlue700'),fontSize:24}}>Go</Text>
                          </View>
                      </View>
                  </View>
              :null}
          </View>
        );
    }
}
const styles=StyleSheet.create({
    searchContainer:{
      margin:5,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    panelContainer:{
        margin:5,
        height:120,
        backgroundColor:'yellow',
        flexDirection:'row'
    }
})