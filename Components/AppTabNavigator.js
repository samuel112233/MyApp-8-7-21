import * as React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import RequestScreen from '../screens/RequestScreen';
import AcceptScreen from '../screens/AcceptScreen';

export const AppTabNavigator=createBottomTabNavigator({
    Request:{
        screen:RequestScreen,
        navigationOptions:{
            tabBarIcon:<Image/>,
            tabBarLabel:'Make A Request'
        }
    },
   Accept:{
       screen:AcceptScreen,
       navigationOptions:{
           tabBarIcon:<Image/>,
           tabBarLabel:'Accept A Request'
       }
   }
})