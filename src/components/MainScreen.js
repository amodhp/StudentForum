import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Modal} from 'react-native';
import Header from './reusableComponents/Header';
import TextField from './reusableComponents/TextField';
import Card from './reusableComponents/Card';
import Spinner from './reusableComponents/Spinner';
import { connect } from 'react-redux';
import { imageSearchBoxValueChanged,getImageListFromApi ,imageListLoader} from '../actions';
import axios from 'axios';



class MainScreen extends Component
 {
    
  renderLoader(){
    if(this.props.loading){
      return  <Spinner/>
    }
  }

 

  
  componentDidMount(){
    // this.props.imageListLoader(true)
    this.props.getImageListFromApi()
   
  }

 render(){
  
  return (
    <View style={styles.screen}>
      <Header />
      <TextField placeholder="search" onChangeText={value=>{
        console.log("Value changed to",value)
        this.props.imageSearchBoxValueChanged(this.props.image_list,value)
      }} 
      value={this.props.image_search_value}
      />
      
       {this.renderLoader()}
        <FlatList
          data={this.props.filtered_image_list}
          renderItem={item => {
            return (
              <Card img={item.item.download_url} name={item.item.author} />
            );
          }}/>
           
            
    
    </View>
  );

}}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f2c48f',
    flex: 1,
  },
});
const mapStateToProps=state=>{
  return{
    image_search:state.imageListing.image_search,
    image_list:state.imageListing.image_list,
    loading:state.imageListing.loading,
    filtered_image_list:state.imageListing.filtered_image_list,
  }
}
export default connect(mapStateToProps,{imageSearchBoxValueChanged,getImageListFromApi,imageListLoader})(MainScreen)
