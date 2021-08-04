import * as React from 'react';
import {View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class RequestScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            personName:' ',
            reasonForRequest:' '
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=()=>{
        var userId=this.state.userId
        var requestId=this.createUniqueId()
        db.collection('Request').add({
            'user_Id':userId,
            'person_name':personName,
            'reason_For_Request':reasonForRequest,
            'request_Id':requestId
        })
        this.setState({
            personName:'',
            reasonForRequest:''
        })
        return Alert.alert('Request Added Successfully')
    }
  render(){
      return(
          <View style={{flex:1}}>
            <KeyboardAvoidingView>
                <TextInput
                style={StyleSheet.inputBox}
                placeholder={'Person Name'}
                onChangeText={(text)=>{
                    this.setState({
                        personName:text
                    })
                }}
                value={this.state.personName}/>
                <TextInput
                style={StyleSheet.inputBox}
                placeholder={'Reason For Request'}
                onChangeText={(text)=>{
                    this.setState({
                        reasonForRequest:text
                    })
                }}
                value={this.state.reasonForRequest}/>
                <TouchableOpacity style={StyleSheet.button}
                onPress={()=>{
                    this.addRequest()
                }}>
                 <Text>Request</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
      )
  }
}