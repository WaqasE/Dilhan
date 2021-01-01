import React,{useState} from 'react';
import {  StyleSheet,TouchableOpacity,Text } from 'react-native';
import colors from '../config/colors';

export default function Day({theme, day, days, setDays})  {
    const [active, setActive] = useState(false)

    const onPressHandler = () =>{
        if(active){
            var data = days.filter(item=>item!==day)
            console.log(data)
            setDays(data)
            setActive(!active)
        }
        else{
            var data = days;
            data[data.length] = day;
            console.log(data)
            setDays(data);
            setActive(!active)
        }
        
    }

    return  (
        <TouchableOpacity onPress={onPressHandler} style={[styles.container, {        borderWidth:active?2:0,backgroundColor:active?'#a3a2a2':theme==='light'?'#d9d9d9':'#666666'}]}>
                <Text style={{color:active?'#FFF':theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontSize:20,fontWeight:'bold'}}>{day}</Text>
        </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    container:{
        width:60,
        height:60,
        borderRadius:30,
        justifyContent: 'center',
        alignItems:'center',
        borderColor:colors.lightTheme.accent
    }
 });