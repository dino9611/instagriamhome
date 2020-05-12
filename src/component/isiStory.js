import React from 'react';
import {Card,CardItem,Thumbnail,Text} from 'native-base'


const IsiStory=({data,isdarkmode,theme})=>{
    
    const text=isdarkmode?theme.darkmode.color:theme.defaultmode.color
    const backgroundColor=isdarkmode?theme.darkmode.backgroundColor:theme.defaultmode.backgroundColor
    return(
        <Card key={data.name} style={{height:95,marginRight:-20}} transparent  >
            <CardItem style={{flexDirection:'column',backgroundColor:backgroundColor}} >
                <Thumbnail
                    source={{
                        uri:data.foto
                    }}
                />
                <Text style={{fontSize:15,color:text}}>{data.name}</Text>
            </CardItem> 
        </Card>
    )
}



export default IsiStory;

