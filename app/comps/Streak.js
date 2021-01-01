import React from 'react';
import {  StyleSheet,View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../config/colors'

export default function Streak({theme, day, id, icon})  {
    return  (
        <View style={[styles.container,{ backgroundColor:theme==='light'?'#d9d9d9':'#666666',}]}>
                <Text style={{fontSize:15,color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary}}>{day}</Text>
                <Text style={{fontSize:20, fontWeight:'bold',marginVertical:5,color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary}}>{id}</Text>
                <Entypo name={icon} size={24} color="#f19d0d" />
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:50, 
        height:100,
        borderRadius:20,
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    }
 });