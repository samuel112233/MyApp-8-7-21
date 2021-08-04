import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';



export default class AcceptScreen extends React.Component{
    constructor(){
        super()
        this.state={
            requestList:[]
        }
    }
    getRequestList=()=>{
        var requestRef=db.collection('Request')
        .onSnapshot(snapshot=>{
            var requestList=snapshot.docs.map(document=>document.data())
            this.setState({
                requestList:requestList
            })
        })
    }
    componentDidMount(){
        this.getRequestList()
    }
    keyExtractor=(index)=>{
        index.toString()
    }
    renderItem=({Item,i})=>{
     return(
         <ListItem
         key={i}
         title={Item.person_name}
         subtitle={Item.reason_for_request}
         rightElement={
             <TouchableOpacity style={StyleSheet.button}>
                 <Text>View</Text>
             </TouchableOpacity>
         }
         bottomDivider
         />
     )
    }
  render(){
      return(
          <View style ={{flex:1}}>
              {
                  this.state.requestList.length===0
                  ?(
                      <View>
                          <Text>No Requests</Text>
                      </View>
                  )
                  :(
                      <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.requestList}
                      renderItem={this.renderItem}/>
                  )
              }
          </View>
      )
  }
}