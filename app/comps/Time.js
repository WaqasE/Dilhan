import React from 'react';
import {  StyleSheet,View, TouchableOpacity, Text, Dimensions } from 'react-native';
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';

export default function Time({theme, time, icon, active, onPress})  {
    return  (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, { backgroundColor:theme==='light'?'#d9d9d9':'#666666',    borderWidth:active?2:0, justifyContent:icon?'space-between':'center'}]}>
                    <Text style={{color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontSize:15, fontWeight:'bold'}}>{time}</Text>
                   {icon&& <MaterialIcons name="edit" size={15} color={colors.darkTheme.accent} />}
            </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        borderRadius:20,
        height:40,
        borderColor:colors.darkTheme.accent,
        paddingHorizontal:15,
        width:Dimensions.get('screen').width/3-20,
        alignItems:'center',
        flexDirection:'row',

    }
 });