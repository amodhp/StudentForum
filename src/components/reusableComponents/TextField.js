import React,{Component} from 'react'
import {View,TextInput,StyleSheet} from 'react-native'

class TextField extends Component{
    render(){
        const {textField}=styles
        const{placeholder,onChangeText,style,value}=this.props
        return(
            <View >
                <TextInput style={[textField,style]} 
                onChangeText={onChangeText} 
                value={value} 
                placeholder={placeholder}
                 placeholderTextColor='grey' 
                 ></TextInput>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    textField:{
     width:'80%',
     margin:20,
     backgroundColor:'white',
     borderRadius:5,
     marginLeft:30,
     
    }

})

export default TextField