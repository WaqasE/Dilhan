import React,{useContext, useEffect, useState} from 'react';
import {  Dimensions, StyleSheet,View, Text } from 'react-native';
import colors from '../config/colors';
import ThemeContext from '../context/Theme'
import { Entypo } from '@expo/vector-icons'
import MoodContext from '../context/Mood'

const {width, height} = Dimensions.get('screen')

export default function Month()  {
    const themeProvider = useContext(ThemeContext)
    const [feeling, setFeeling] = useState('')
    const {streaks} = useContext(MoodContext)

    const statsSetter = (feel) =>{
        var percent = '0%';
        switch(feel){
            case 'Sad': percent= '10%'; break;
            case 'Neutral': percent='30%';  break;
            case 'Happy': percent='50%'; break;
            case 'Flirty': percent= '70%';break;
        }
        return percent;
    }

    useEffect(
        ()=>{
            var reaction = [0,0,0,0];
            streaks.forEach(({title})=>{
                switch(title){
                    case 'Sad': reaction[0]=reaction[0]+1; break;
                    case 'Neutral':   reaction[1]=reaction[1]+1;  break;
                    case 'Happy': reaction[2]=reaction[2]+1;  break;
                    case 'Flirty': reaction[3]=reaction[3]+1; break;
                }
            })
            const i = reaction.indexOf(Math.max(...reaction));
            switch(i){
                case 0: setFeeling('Sad'); break;
                case 1: setFeeling('Neutral'); break;
                case 2: setFeeling('Happy'); break;
                case 3: setFeeling('Flirty'); break;
            }
        },[]
    )


    
    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.primary}]}>
             <Text style={[styles.headingText, { color:'grey', fontSize:18 ,fontWeight:'bold', marginVertical:10}]}>Monthly Average</Text>
             <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?'white':'#666666', borderRadius:10,flexDirection:'row', height:'60%',elevation:5,width:'90%',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}]}>
                  <View style={styles.yAxis}>
                        <Entypo style={{height:'25%',alignItems:'center',justifyContent:'center'}} name="emoji-flirt" size={25} color="#f19d0d" />
                        <Entypo style={{height:'25%',alignItems:'center',justifyContent:'center'}} name="emoji-happy" size={25} color="#f19d0d" />
                        <Entypo style={{height:'25%',alignItems:'center',justifyContent:'center'}} name="emoji-neutral" size={25} color="#f19d0d" />
                        <Entypo style={{height:'25%',alignItems:'center',justifyContent:'center'}} name="emoji-sad" size={25} color="#f19d0d" />
                  </View>

                  {streaks.map(({ id, title, day }) => (
                    <View key={id} style={[styles.stats,{height:statsSetter(title)}]}>
                           <Text style={{fontWeight:'bold', bottom:-25,alignSelf:'center',position:'absolute',fontSize:12, width:35, color:themeProvider.theme==='light'?'black':'white',}}>Week 1</Text>
                  </View>
                    ))}
            </View>
            <Text style={[styles.headingText, { color:'grey', fontSize:18 , marginTop:20}]}>You were more <Text style={{color:'#f19d0d'}}>{feeling}</Text> this month</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:width-40,
        height:350,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    yAxis:{
        width:50,
        height:'80%',
        alignItems:'center',
        justifyContent:'center'
        
    },
    headingText:{
        fontSize:30,
        textTransform:'capitalize',
        flexDirection:'column',
        alignSelf:'flex-start'
    },
    stats:{
        width:25,
        height:'70%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d9d9d9',
        borderRadius:20,
        alignSelf:'flex-end',
        marginBottom:'15%'
    }
 });