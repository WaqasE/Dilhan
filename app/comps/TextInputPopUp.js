import React from 'react';
import {  StyleSheet,View, Dimensions, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
const {width, height} =Dimensions.get('screen')

export default function TextInputPopUp({theme, setpopUp,title, text, setText})  {
    return  (
        <View style={{height:'100%',width:'100%',position:'absolute',backgroundColor:theme==='light'?'rgba(0,0,0,0.9)':'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center'}}>
        <View style={[styles.container,{backgroundColor:theme==='light'?'#d9d9d9':'rgba(56,56,56,1)',}]}>
               <Text style={{marginVertical:5,color:theme==='light'?'grey':'rgba(255,255,255,1)', fontSize:20, textTransform:'capitalize'}}>Add {title}</Text>
               <TextInput
                   style={{width:'80%',height:50,borderRadius:30,borderColor:colors.darkTheme.accent,borderWidth:1,marginVertical:20,paddingHorizontal:20, color:theme==='light'?'grey':'rgba(255,255,255,0.5)'}}
                   placeholder={title}
                   placeholderTextColor={theme==='light'?'grey':'rgba(255,255,255,0.5)'}
                   numberOfLines={1}
                   maxLength={35}
                   onChangeText={(text)=>{setText(text)}}
                   value={text}
               />
                 <View style={{flexDirection:'row',height:30,justifyContent:'space-around',width:'90%',marginTop:20}}>
                    <TouchableOpacity onPress={()=>{setpopUp(false)}} style={[styles.btn,{ backgroundColor:theme==='light'?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.4)'}]}><Text>Cancel</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setpopUp(false)}} style={[styles.btn,{backgroundColor:theme==='light'?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.4)'}]}><Text>Done</Text></TouchableOpacity>
            </View>
        </View>
        </View>
     );
}

const styles = StyleSheet.create({
     container:{
        height:220,
        width:width/1.3,
        borderRadius:20,
        paddingVertical:20,
        alignItems:'center'
    },
    btn:{
        height:'100%',
        borderRadius:20,
        width:'38%',
        justifyContent:'center',
        alignItems:'center'
    }
 });