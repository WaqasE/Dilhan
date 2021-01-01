import React from 'react';
import {  StyleSheet,View,TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

var week = new Array(7);
week[0] = "Sun";
week[1] = "Mon";
week[2] = "Tue";
week[3] = "Wed";
week[4] = "Thur";
week[5] = "Fri";
week[6] = "Sat";

var d = new Date();

export default function Emotions({title, icon, onPress, theme, mood, setMood})  {
    return  (
        <TouchableOpacity onPress={()=>{setMood({title:title,icon:icon,day:week[d.getDay()],date:d.toISOString().slice(8, 10)})}}>
            <View style={[styles.container, { backgroundColor:theme==='light'?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.1)'}]}>
                 {mood.title===title? <Entypo style={{position:'absolute',top:10,right:0}} name="check" size={20} color={theme==='light'?'grey':'rgba(255,255,255,1)'} /> :null}
                  <Entypo name={icon} size={30} color="#f19d0d" />
                  <Text style={{marginVertical:5,color:theme==='light'?'grey':'rgba(255,255,255,1)'}}>{title}</Text>
            </View>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        width:70,
        height:70,
        borderRadius:35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.1)',
        marginRight:20
    }
 });