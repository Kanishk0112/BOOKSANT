import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import {createStackNavigator} from "react-navigation-stack"
import Donatescreen from "../Screens/Donatescreen"
import Recieverdetails from "../Screens/Recieverdetailsscreen"

export const AppStackNavigator= createStackNavigator({
BookDonateList:{
    screen:Donatescreen,
    navigationOptions:{headerShown:false},

},
Recieverdetails:{
    screen:Recieverdetails,
    navigationOptions:{headerShown:false},
},
},
{initialRouteName:"BookDonateList"
})