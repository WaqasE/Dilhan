import React from 'react';
import {  StyleSheet,View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'

import colors from '../config/colors';

export default function SmallCard({ title, theme, color='#000000'})  {
    return  (
        <View style={[styles.container,{backgroundColor:theme==='light'?'#f1f1f1':'#666666'}]}>
            <Entypo  style={{ position:'absolute',top:5, left:15}} name="pin" size={25} color={color} />
            <Text style={{fontSize:20, color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary}}>{title}</Text>
            <Text style={{color:color,fontWeight:'bold', fontSize:13, position:'absolute', bottom:10, right:15}}>0 mins</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:150,
        height:90,
        borderRadius:20,
        backgroundColor:'#f1f1f1',
        marginRight:10,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        elevation:3
        
    }
 });