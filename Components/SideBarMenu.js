import * as React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
 export default class SideBarMenu extends React.Component{
     render(){
         return(
             <View style={styles.container}>
                <DrawerItems {...this.props}/>
             </View>
         )
     }
 }