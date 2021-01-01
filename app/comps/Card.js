import React from 'react';
import {  StyleSheet,View, Text, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons'

import colors from '../config/colors';

export default function Card({icon, title, details, bg, onPress})  {
    return  (
        <TouchableOpacity onPress={onPress}>
                <View style={[styles.container,{backgroundColor:bg}]}>
                        <Fontisto size={40} name={icon} color='#FFFFFF'/>
                        <Text style={{fontSize:17,color:'white', marginTop:10}}>{details}</Text>
                        <Text style={{fontSize:25,color:'white', fontWeight:'bold'}}>{title}</Text>
                </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        height:170,
        width:150,
        backgroundColor:colors.darkTheme.accent,
        borderRadius:12,
        justifyContent:'center',
        alignItems:'center'
    }
 });