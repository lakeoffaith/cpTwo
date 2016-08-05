/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text
}from 'react-native'
/*actions={[{
    icon: 'warning',
    badge: { value: 4, animate: true },
}]}*/
import {Toolbar as MaterialToolbar} from 'react-native-material-design'
export default class Toolbar extends React.Component{
    constructor(){
        super();
    }

    getArray(actiongsArray){
        var navigator=this.context.navigator;
        const array=[];

        for(var i=0;i<actiongsArray.length;i++){
            let item={};
                let {icon,onPressRoute,badge}=actiongsArray[i];
               item.icon=icon;
                item.onPress=()=>navigator.to(onPressRoute);
                if(badge) item.badge=badge;
            array.push(item);

        }
        return array;

    }
    render(){
        const {navigator}=this.context;
        return(
            <MaterialToolbar
                title={navigator && navigator.currentRoute ?(navigator.currentRoute.title==='Main'?'':navigator.currentRoute.title):''}
                icon={navigator && navigator.isChild? 'keyboard-backspace':'menu'}
                onIconPress={()=> navigator && navigator.isChild ?navigator.back():this.props.onIconPress()}
                actions={navigator? (navigator.currentRoute?(navigator.currentRoute.actionsArray?this.getArray(navigator.currentRoute.actionsArray):null):this.getArray([{icon: 'album',onPressRoute:'App'},{icon: 'tab',badge: { animate: true },onPressRoute:'Device'},{icon: 'person',badge: { animate: true },onPressRoute:'People'},{icon: 'search',onPressRoute:'Search'}])):null}
                rightIconStyle={{
                    marginLeft:30
                }}
            />
        );
    }
}

Toolbar.contextTypes={
    navigator:React.PropTypes.object
}