import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import SideBarMenu from './SideBarMenu';

export const AppDrawer=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
},
{
    contentComponent:SideBarMenu
},
{
initialRoutName:'Home'
})