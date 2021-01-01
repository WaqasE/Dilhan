import React,{useState, useContext} from 'react';
import {  StyleSheet,View, Dimensions, Text, FlatList,TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import Emotions from './Emotions';
const {height, width}= Dimensions.get('screen')
import MoodStore from '../context/MoodStore'
import MoodContext from '../context/Mood'
const emotions = [
    {
        id:1,
        title:'Happy',
        icon:'emoji-happy'
    },
    {
        id:2,
        title:'Flirty',
        icon:'emoji-flirt'
    },
    {
        id:3,
        title:'Neutral',
        icon:'emoji-neutral'
    },
    {
        id:4,
        title:'Sad',
        icon:'emoji-sad'
    }
]

export default function MoodGetter({theme, setpopUp})  {
    const [mood, setMood] = useState({title:'',icon:'',day:'',date:''})
    const {streaks, setStreaks} = useContext(MoodContext)


    const saveData = async() =>{  
        var previousHistory = [];
        if(streaks.length>0){
            previousHistory=streaks;
            var index =  previousHistory. findIndex(data=>{return data.date === mood.date})
        if(index.toString())  {
            console.log(index)
            previousHistory[parseInt(index)]={id:previousHistory.length,title:mood.title,icon:mood.icon,day:mood.day,date:mood.date};
            MoodStore.setToken(JSON.stringify(previousHistory))
            setStreaks(previousHistory)
            setpopUp(false)
        }
        else{
            var newData = previousHistory.length>0?[...previousHistory, { id:previousHistory.length,title:mood.title,icon:mood.icon,day:mood.day,date:mood.date}]:[ { id:previousHistory.length,title:mood.title,icon:mood.icon,day:mood.day,date:mood.date}]
            console.log('here')
            MoodStore.setToken(JSON.stringify(newData))
            setStreaks(newData)
            setpopUp(false)
        }
    
    }
        else{
        var newData = previousHistory.length>0?[...previousHistory, { id:previousHistory.length,title:mood.title,icon:mood.icon,day:mood.day,date:mood.date}]:[ { id:previousHistory.length,title:mood.title,icon:mood.icon,day:mood.day,date:mood.date}]
        console.log('here')
        MoodStore.setToken(JSON.stringify(newData))
        setStreaks(newData)
        setpopUp(false)
    }
    }


    return  (
        <View style={{height:'100%',width:'100%',position:'absolute',backgroundColor:theme==='light'?'rgba(0,0,0,0.9)':'rgba(0,0,0,0.7)',justifyContent:'center',alignItems:'center'}}>
            <View style={[styles.container,{backgroundColor:theme==='light'?'#d9d9d9':'rgba(56,56,56,1)',}]}>
                    <Text style={[styles.headingText, {color:theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontWeight:'bold', marginVertical:20}]}>How do you feel today?</Text>
                    <View style={{height:170,width:'100%',alignItems:'center',marginBottom:20}}>
                   <FlatList
                       data={emotions}
                       keyExtractor={item=>item.id.toString()}
                       numColumns={2}
                       ItemSeparatorComponent={()=>{return(<View style={{width:'100%',height:20}}/>);}}
                       renderItem={
                           ({item})=>{
                               return(
                                <Emotions title={item.title} icon={item.icon} theme={theme} mood={mood} setMood={setMood}/>
                               );
                           }
                       }
                   /></View>
            <View style={{flexDirection:'row',height:40,justifyContent:'space-around',width:'90%'}}>
                    <TouchableOpacity onPress={()=>{setpopUp(false)}} style={[styles.btn,{ backgroundColor:theme==='light'?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.4)'}]}><Text>Cancel</Text></TouchableOpacity>
                    <TouchableOpacity onPress={saveData} style={[styles.btn,{backgroundColor:theme==='light'?'rgba(0,0,0,0.1)':'rgba(255,255,255,0.4)'}]}><Text>Done</Text></TouchableOpacity>
            </View>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container:{
        height:350,
        width:width/1.3,
        borderRadius:20,
        paddingVertical:20,
        alignItems:'center'
    },
    headingText:{
        fontSize:22,
        textTransform:'capitalize',
        flexDirection:'column',
    },
    btn:{
        height:'100%',
        borderRadius:20,
        width:'38%',
        justifyContent:'center',
        alignItems:'center'
    }
 });