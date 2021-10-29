import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Card extends Component {
  render() {
    const {img, name} = this.props;
    const {downloadButton, text} = styles;
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={{uri:img} }/>
        <View>
          <Text style={styles.text}>{name}</Text>
        </View>
        <TouchableOpacity
          style={downloadButton}
          onPress={() => {
            Alert.alert('Download has been pressed!');
          }}>
          <Text style={text}>Download</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#cfd3d4',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginVertical: (10, 10),
    padding: 10,
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#929696',
    elevation: 10,
  },
  image: {
    width: '90%',
    height: 300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    padding: 5,
  },
  downloadButton: {
    backgroundColor: 'green',
    width: '60%',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'darkgreen',
    margin: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default Card;
