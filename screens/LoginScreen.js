
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Input} from 'react-native-elements';
import { Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class LoginScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:' ',
      password:' '
    }
  }
  userLogin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response=>{
      return Alert.alert('Successfully LogedIn')
    })
    .catch(error=>{
      var errorCode = error.code
      var errorMessage = error.message
      return Alert.alert(errorMessage)
    })
  }
  render(){
    return(
     <View style={styles.container}>
        <Input
       theme={{colors:{primary:'#000000'}}}
       label={'Enter Email Id'}
       placeholder={'Enter Email Id'}
       placeholderTextColor={'grey'}
       leftIcon={{
         type:'MaterialIcons',
         name:'person',
         color:'black',
         size:24
       }}
       onChangeText={(text)=>{
         this.setState({
          email:text
         })
       }}/>

      <Input
       theme={{colors:{primary:'#000000'}}}
       label={'Enter Password'}
       placeholder={'Enter Password'}
       placeholderTextColor={'grey'}
       leftIcon={{
         type:'MaterialIcons',
         name:'person',
         color:'black',
         size:24
       }}
       onChangeText={(text)=>{
         this.setState({
          password:text
         })
       }}/>
       <TouchableOpacity style = {styles.button} onPress = {()=>{
         this.props.navigation.navigate("Home")
       }}>
         <Text style = {styles.buttonText}>Login</Text>
       </TouchableOpacity>
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
  button:{
    width:200,
    height:50,
    borderColor:'black',
    borderRadius:10,
    backgroundColor:'grey',
    margin:20,
    alignItems:'center',
    justifyContent:'center'

  },
  buttonText:{
    fontSize:15,
    fontWeight:'bold',
    
  }
});
