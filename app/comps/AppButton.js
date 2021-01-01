import React from 'react';
import {  StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

export default function AppButton({icon, onPress, bg, color})  {
    return  (
        <TouchableOpacity style={[styles.container,{backgroundColor:bg}]} onPress={onPress}>
                <MaterialCommunityIcons name={icon} color={color} size={30}/>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:20,
        justifyContent: 'center',
        alignItems:'center'
    }
 });