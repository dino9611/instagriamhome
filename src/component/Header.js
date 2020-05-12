import React from 'react';

import {
    View,
    TouchableWithoutFeedback,
    Image,
    StatusBar
  } from 'react-native';

import {
    Header, Left, Body, Right, Icon
} from 'native-base'

const Headers=({isdarkmode,theme,setisdarkmode})=>{
    return(
    <Header style={{backgroundColor:isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor}}>
        <StatusBar backgroundColor={isdarkmode?'black':'gray'} barStyle={'light-content'}/>
        <Left>
            <TouchableWithoutFeedback onPress={()=>setisdarkmode(!isdarkmode)}>
            <Icon name='camera' type='Feather' style={{color:isdarkmode?theme.darkmode.color:theme.defaultmode.color}}  />
            </TouchableWithoutFeedback>
        </Left>
        <Body style={{alignItems:'center'}}>
            <View style={{width:50,}}>
                <Image
                    style={{width:150,height:45,tintColor:isdarkmode?theme.darkmode.color:theme.defaultmode.color}}
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
                    }}
                />
            </View>
        </Body>
        <Right>
            <Icon name='paper-plane' style={{color:isdarkmode?theme.darkmode.color:theme.defaultmode.color}} />
        </Right>
    </Header>

    )
}


export default Headers;