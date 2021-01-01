import React from 'react';
import {  StyleSheet,View, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function AddComponent({theme, title, onPress})  {
    return  (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor:theme==='light'?'#d9d9d9':'#666666',}]}>
                    <Text style={{color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary}}>{title}</Text>
                    <MaterialIcons name="edit" size={15} color={colors.darkTheme.accent} />
            </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        height:30,
        borderColor:colors.darkTheme.accent,
        borderWidth:2,
        paddingHorizontal:10,
        width:120,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',

    }
 });