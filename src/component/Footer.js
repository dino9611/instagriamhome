import React, { Component } from 'react';
import {  Footer, FooterTab, Button, Icon } from 'native-base';
class Footers extends Component {
    state = {  }
    render() {
        const {isdarkmode,theme}=this.props 
        const text=isdarkmode?theme.darkmode.color:theme.defaultmode.color
        const backgroundColor=isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor 
        return (
        <Footer style={{height:40}} >
            <FooterTab style={{backgroundColor:backgroundColor}}>
              <Button   >
                <Icon style={{color:text,fontWeight:'bold'}} active name="home" />
              </Button>
              <Button  >
                <Icon style={{color:text}} name="search" />
              </Button>
              <Button >
                <Icon style={{color:text}} name="add" />
              </Button>
              <Button >
                <Icon style={{color:text}} name="heart" />
              </Button>
              <Button >
                <Icon style={{color:text}} name="person" />
              </Button>
            </FooterTab>
          </Footer>


        );
    }
}
 
export default Footers;