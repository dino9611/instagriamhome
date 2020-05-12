import React, { Component } from 'react';
import { Image ,View} from 'react-native';
import {  CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';

class Feed extends Component {
    state = {  }
    render() {
        const {isdarkmode,theme}=this.props 
        const text=isdarkmode?theme.darkmode.color:theme.defaultmode.color
        const backgroundColor=isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor
        return (
        <View style={{paddingHorizontal:-1}}>
            <CardItem style={{backgroundColor:backgroundColor}} >
                <Left>
                    <Thumbnail source={{uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                    <Body>
                        <Text style={{color:text}}>NativeBase</Text>
                        <Text note>GeekyAnts</Text>
                    </Body>
                </Left>
                <Right>
                    <Icon name='more' style={{fontSize:30}}/>
                </Right>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem  style={{marginTop:-15,backgroundColor:backgroundColor}}>
                <Left>
                    <Icon name='hearto' style={{color:text,fontSize:20,marginRight:10}}  type='AntDesign'/>
                    <Icon name='comment' style={{color:text}} type='EvilIcons'/>
                </Left>
            </CardItem>
            <CardItem style={{marginTop:-10,backgroundColor:backgroundColor,padding:-10}}>
                <Left>
                    <Text style={{fontSize:12,marginLeft:-4,color:text}}>5 likes</Text>
                </Left>
            </CardItem>
            <CardItem style={{marginTop:-10,backgroundColor:backgroundColor}}>
                <Text style={{fontWeight:'bold',marginRight:5,color:text}}>
                    name 
                </Text>
                <Text style={{color:text}}>
                    deskripsi
                </Text>
            </CardItem>
        </View> 

        );
    }
}
 
export default Feed;