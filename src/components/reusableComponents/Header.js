import React,{Component} from "react";
import{View,Text,StyleSheet} from 'react-native'

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.heading}>Image Gallery</Text>
            </View>
     
        )
    }
}

const styles=StyleSheet.create({
    header:{
        height:50,
        backgroundColor:'#ad6b1d',
        justifyContent:'center',
        alignItems:'center',
        elevation:10
        },
    heading:{
        color:'white',
        fontFamily:'sans-serif',
        fontSize:20,
        fontWeight:'bold'
    }

})

export default Header