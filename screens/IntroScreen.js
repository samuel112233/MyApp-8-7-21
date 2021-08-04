
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

var logo = require('../assets/happy1.png')

export default class IntroScreen extends React.Component{
  constructor(props){
    super(props)
    setTimeout(()=>{
      this.props.navigation.navigate('SignUp')
    },2000)
  }
  render(){
    return(
     <View style={styles.container}>
       <Text style={styles.text}>Senior Citizen O' Clock</Text>
       <Image source={logo}
       style={{width:100,height:100}}/>

     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{

  }
});
