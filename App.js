import React, { useState } from 'react';
import {
  View, ScrollView,
} from 'react-native';

import Header from './src/component/Header'
import Atas from './src/component/Atas'
import Feed from './src/component/Feed'
import Footer from './src/component/Footer'
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

  // const text=isdarkmode?theme.darkmode.color:theme.defaultmode.color
  // const backgroundColor=isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor


  return (
    <View style={{flex:1}} >
      <Header isdarkmode={isdarkmode} theme={theme} setisdarkmode={setisdarkmode}/>
      <ScrollView>
        <View style={{height:94}}>
          <Atas isdarkmode={isdarkmode} theme={theme}/>
        </View>
        <View>
          <Feed isdarkmode={isdarkmode} theme={theme}/>
          <Feed isdarkmode={isdarkmode} theme={theme}/>
        </View>
      </ScrollView>
      <Footer isdarkmode={isdarkmode} theme={theme}/>
    </View>
  );
};



export default App;
