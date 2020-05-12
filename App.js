import React, { useState } from 'react';
import {
  View,
} from 'react-native';

import Header from './src/component/Header'


const data=[
  {
      name:'Your Story',
      foto:'https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Dessy',
      foto:'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Bobi',
      foto:'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'       
  },
  {
      name:'Nata',
      foto:'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Dzaky',
      foto:'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'Aya hacker',
      foto:'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
      name:'hafiz css',
      foto:'https://images.pexels.com/photos/2131830/pexels-photo-2131830.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
]

import {Content,Card,CardItem,Thumbnail,Text} from 'native-base'



const App= () => {
  const [isdarkmode,setisdarkmode]=useState(false)

  const theme={
    darkmode:{
      color:'#F5F5f5',
      backgroundColor:'#212121'
    },
    defaultmode:{
      color:'black',
      backgroundColor:'white'
    }
  }


  const renderstory=()=>{
    return data.map(val=>{
      return(
        <Card style={{height:95,marginRight:-20}} transparent  >
            <CardItem style={{flexDirection:'column',backgroundColor:'black'}} >
                <Thumbnail
                    source={{
                        uri:val.foto
                    }}
                />
                <Text style={{fontSize:15,color:'white'}}>{val.name}</Text>
            </CardItem> 
        </Card>
      )
    })
  }

  return (
    <View style={{flex:1}}>
      <Header isdarkmode={isdarkmode} theme={theme} setisdarkmode={setisdarkmode}/>
      <Content style={{backgroundColor:isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor,paddingRight:-30}} horizontal alwaysBounceHorizontal>
        {renderstory()}
      </Content>
    </View>
  );
};



export default App;
