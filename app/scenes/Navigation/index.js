/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
}from 'react-native'
import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state={
            route:null,
        }
    }
    changeScene(path,name){
        const {drawer,navigator}=this.context;
        this.setState({
            route:path
        });
        navigator.to(path,name);
        drawer.closeDrawer();
    }
    render(){
        const {route}=this.state;
        return(
            <View style={{flex:1}}>
            <Drawer theme='light'>
                <Drawer.Header image={<Image source={require('../../img/nav.jpg')} />}>
                    <View style={styles.header}>
                        <Avatar borderRadius={40} size={80} image={<Image source={require('../../img/timg.jpg')}/>} />
                        <Text style={[styles.text, TYPO.paperFontSubhead]}>王大超</Text>
                    </View>
                </Drawer.Header>


                <Drawer.Section
                    items={[
                    {
                        icon: 'home',
                        value: 'Welcome',
                        active: !route || route === 'App',
                        onPress: () => this.changeScene('App'),
                        onLongPress: () => this.changeScene('App')
                    },{
                        icon: 'assignment',
                        value: '我的任务',
                        label: '12',
                        active: route === 'Task',
                        onPress: () => this.changeScene('Task'),
                        onLongPress: () => this.changeScene('Task')
                    }, {
                        icon: 'alarm',
                        value: '我的通知',

                        active: route === 'Notify',
                        label: '8',
                        onPress: () => this.changeScene('Notify'),
                        onLongPress: () => this.changeScene('Notify')
                    }, {
                        icon: 'settings',
                        value: '详细配置',
                        label: '10',
                        active: route === 'Setting',
                        onPress: () => this.changeScene('Setting'),
                        onLongPress: () => this.changeScene('Setting')
                    }
                    ]}
                />
                </Drawer>
                </View>
        );
    }
}
Navigation.contextTypes={
    drawer:React.PropTypes.object.isRequired,
    navigator:React.PropTypes.object
}

const styles =StyleSheet.create( {
    header: {
        paddingTop: 16,
        paddingLeft:60
    },
    text: {
        marginTop: 20,
        marginLeft:20,
    }
});