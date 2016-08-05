/**
 * Created by ijoy on 16-6-28.
 */
/**
 * Created by ijoy on 16-6-22.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    PixelRatio
} from 'react-native'

export default class Welcome extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../img/welcome.jpg')} style={styles.img} resizeMode={Image.resizeMode.cover}>
                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcome}>
                            无线应用辅助管理系统
                        </Text>
                    </View>

                </Image>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{

    },
    img:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,

    },
    welcomeContainer:{
        position:'absolute',
        backgroundColor:'transparent',
        bottom:60,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
    },
    welcome:{
        fontSize:20,

    }
});