import React from 'react';
import {  StyleSheet,TouchableHighlight, View, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

export default function Strip({theme, title, detail, onPress})  {
    return  (
        <TouchableHighlight onPress={onPress} underlayColor={theme==='light'?'rgba(0,0,0,0.3)':'rgba(255,255,255,.3)'} >
            <View style={styles.container}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                            <MaterialCommunityIcons name="record-circle-outline" size={20} color={colors.lightTheme.accent} />
                            <Text style={{fontSize:18,marginLeft:10,color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary,}}>{title}</Text>
                    </View>
                    {/* <Text style={{fontSize:18,color:colors.lightTheme.accent}}>{detail}</Text> */}
                    <View style={{backgroundColor:colors.darkTheme.accent,borderRadius:7.5, width:60,height:20,justifyContent:'center',alignItems:'center', marginLeft:-25 }}>
                          <Text style={{ color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontSize:17 ,fontWeight:'bold',}}>View</Text>
                    </View>
            </View>     
        </TouchableHighlight>
     );
}

const styles = StyleSheet.create({
    container:{
        width:'80%',
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    }
 });