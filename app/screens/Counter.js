import React,{useState,useEffect} from 'react';
import {  StyleSheet,View, StatusBar, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const playlist =  [
    {
        id:1,
        source:require('../assets/1.mp3')
    },
    {
        id:2,
        source:require('../assets/2.mp3')
    }
]

import colors from '../config/colors';

export default function Counter({navigtion, route})  {
    const [play, setPlay] = useState(false)
    const [sec,setsec]=useState(0)
    const [min,setmin]=useState(0)
    const [hour,sethour]=useState(0)
    const [sound, setSound] = useState('')
    const {habit} = route.params;

    
    useEffect(() => {
        if(play){
            playSound()
        const timerId = setInterval(() => {
          if (sec === 59) {
              setmin(m => m + 1)
              setsec(0)
          }
          else if (min === 59) {
            sethour(h => h+ 1)
            setmin(0)
            setsec(0)
        }
          else setsec(s => s + 1)
        }, 1000)
        return () => clearInterval(timerId);}
        else{

        }
      }, [hour,sec, min,play])


      const playSound =async() =>{
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/1.mp3'),{shouldPlay:play}
            );
            await sound.playAsync().then(
                ()=>{ setSound(sound)}
            )
        }


        const pauseSound =async() =>{
            const { sound } = await Audio.Sound.createAsync(
                require('../assets/1.mp3')
            );
            await sound.playAsync(); 
        }


      const n=(n)=>{
        return n > 9 ? "" + n: "0" + n;
    }


    return  (
        <View style={styles.container}>
        <StatusBar hidden={true}/>
        <ImageBackground resizeMode="cover" source={require('../assets/bg.jpg')} style={{width:'100%',height:'100%',  justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'rgba(0,0,0,0.6)',width:'100%',height:'100%'}}>
                    <Text style={styles.time}>{n(hour)}:{n(min)}:{n(sec)}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.detail}>Time Spent on </Text>
                    <View style={{alignItems:'center',justifyContent:'center',backgroundColor:'white',height:20,width:100,borderRadius:10,paddingHorizontal:10,marginLeft:5,}}>
                    <Text style={{color:'black',textAlign:'center', textTransform:'capitalize'}}>{habit}</Text></View>
                    </View>
                    <View style={{position:'absolute', top:'45%',alignSelf:'center'}}>
                            <TouchableOpacity style={styles.button} onPress={()=>{setPlay(!play)}}>
                                    {play?
                                        <MaterialCommunityIcons name="pause" size={50} color="white" />
                                        :
                                        <MaterialCommunityIcons name="play" size={50} color="white" />
                                        }
                        </TouchableOpacity>
                            { play?
                            <Text style={{color:'white', fontWeight:'bold', marginTop:20}}>Take a break</Text>:
                            <Text  style={{color:'white', fontWeight:'bold', marginTop:20}}>Start Meditation</Text>
                        }
                    </View>
                    <View style={{position:'absolute',bottom:'5%',height:150,width:'90%',backgroundColor:'rgba(255,255,255,0.5)',alignSelf:'center',borderRadius:20,justifyContent:'center'}}>
                            <TouchableOpacity>
                                <View style={{paddingHorizontal:20,height:60,flexDirection:'row',alignItems:'center'}}>
                                    <View style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:12,backgroundColor:'white'}}>
                                        <MaterialCommunityIcons name="music-note-eighth" size={30} color={colors.lightTheme.accent} />
                                    </View>
                                    <View style={{justifyContent:'flex-start',marginLeft:15,borderBottomColor:'black', borderBottomWidth:1}}> 
                                            <Text style={{color:'white', fontWeight:'bold',fontSize:18}}>Calming Slow Song</Text>
                                            <Text style={{color:'black',marginVertical:5}}>Relax Time</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                    <View style={{paddingHorizontal:20,height:60,flexDirection:'row',alignItems:'center'}}>
                                        <View style={{width:50,height:50,justifyContent:'center',alignItems:'center',borderRadius:12,backgroundColor:'white'}}>
                                            <MaterialCommunityIcons name="music-note-eighth" size={30} color={colors.lightTheme.accent} />
                                        </View>
                                        <View style={{justifyContent:'flex-start',marginLeft:15,borderBottomColor:'black', borderBottomWidth:1}}> 
                                                <Text style={{color:'white', fontWeight:'bold',fontSize:18}}>Focus Beat</Text>
                                                <Text style={{color:'black',marginVertical:5}}>Focus Time</Text>
                                        </View>
                                    </View>
                            </TouchableOpacity>           
                    </View>

            </View>
        </ImageBackground>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    time:{
        marginTop:100,
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        letterSpacing:2
    },
    detail:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        alignSelf:'center',
        marginVertical:20
    },
    button:{
        alignSelf:'center',
        width:80,
        height:80,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255,255,255,0.3)'
    }
 });