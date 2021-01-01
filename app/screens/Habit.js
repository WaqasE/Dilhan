import React, { useContext, useState } from 'react';
import {  StyleSheet,View, StatusBar, Text, FlatList, TouchableOpacity } from 'react-native';
import AppButton from '../comps/AppButton';
import colors from '../config/colors'
import ThemeContext from '../context/Theme'
import ThemeStorage from '../context/Storage'
import HabitContext from '../context/Habit'
import HabitStorage from '../context/HabitStore'
import AddComponent from '../comps/AddComponent';
import Day from '../comps/Day';
import TextInputPopUp from '../comps/TextInputPopUp';

const days = [
    {
        id:1,
        day:'Mon',
        active:true
    },
    {
        id:2,
        day:'Tue',
        active:false
    },
    {
        id:3,
        day:'Wed',
        active:true
    },
    {
        id:4,
        day:'Thu',
        active:false
    },
    {
        id:5,
        day:'Fri',
        active:false
    },
    {
        id:6,
        day:'Sat',
        active:true
    } ,
    {
        id:7,
        day:'Sun',
        active:false
    }
]


export default function Habit({navigation})  {
    const themeProvider = useContext(ThemeContext)
    const [popUp, setpopUp]= useState(false)
    const [habit, setHabit] = useState('Add Habit')
    const [time, setTime] = useState('Add Time')
    const [duration, setDuration] = useState('Add Duration')
    const [title, setTitle] = useState('')
    const [daysSelected, setDaysSelected] = useState([])
    const {habits, setHabits} = useContext(HabitContext)

    const popUpHandler = (title) =>{
        setTitle(title)
        setpopUp(true)
    }

    const saveData = async() =>{  
        var previousHistory = [];
        if(daysSelected.length>0 && habit!=='' && habit!=='Add Habit' && time !=='' && time !=='Add Time' && duration!=='' && duration!=='Add Duration'){
            previousHistory=habits;
            var newData = previousHistory.length>0?[...previousHistory, { id:previousHistory.length,habit:habit,time:time,duration:duration,days:daysSelected}]:[{ id:previousHistory.length,habit:habit,time:time,duration:duration,days:daysSelected}]
            console.log(newData)
            HabitStorage.setToken(JSON.stringify(newData))
            setHabits(newData)
            navigation.goBack()
    }
    }


    return  (
        <>
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.primary}]}>
            <StatusBar hidden={true}/>
            <View style={styles.header}>
                        <View>
                            <Text style={[styles.headingText, {color:themeProvider.theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontWeight:'bold', marginVertical:20}]}>Habits</Text>
                        </View>
                        <View style={styles.headerButtons}>
                        <AppButton 
                                icon={themeProvider.theme==='light'?'weather-night':'white-balance-sunny'}
                                bg={themeProvider.theme==='light'?"#f1f1f1":'#303030'} 
                                color={themeProvider.theme==='light'?"#c4c4c4":'#FFF'}
                                onPress={()=>{
                                    {themeProvider.theme==='light'?themeProvider.setTheme('dark'):themeProvider.setTheme('light')}
                                    {themeProvider.theme==='light'?ThemeStorage.setToken('dark'):ThemeStorage.setToken('light')}
                                }}
                            />
                        <AppButton 
                                icon="plus" 
                                bg={themeProvider.theme==='light'?colors.lightTheme.accent:colors.darkTheme.accent} 
                                color={themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.secondary} 
                                />
                              </View>
                 </View>
                 <View style={{width:'100%'}}>
                                <Text style={[styles.headingText, { color:'grey', fontSize:18 ,fontWeight:'bold', marginVertical:10, textTransform:'none'}]}>I am going to</Text>
                                <View style={{marginLeft:10}}>
                                <AddComponent onPress={()=>popUpHandler('habit')} theme={themeProvider.theme} title={habit}/></View>
                </View>

                <View style={{width:'100%',marginTop:50,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                                <Text style={[styles.headingText, { color:'grey', fontSize:18 ,fontWeight:'bold',textTransform:'none'}]}>How Often?</Text>
                                <AddComponent onPress={()=>popUpHandler('time')} theme={themeProvider.theme} title={time}/>                  
                </View>
                <View style={{height:60,marginVertical:20}}>
                <FlatList
                    data={days}
                    keyExtractor={item=>item.id.toString()}
                    contentContainerStyle={{height:60,}}
                    horizontal={true}
                    ItemSeparatorComponent={()=>{return <View style={{width:10,height:'100%'}}/>}}
                    overScrollMode="never"
                    renderItem={
                        ({item})=>{
                            return(
                                <Day theme={themeProvider.theme} day={item.day} active={item.active} days = {daysSelected} setDays={setDaysSelected}/>
                            );
                        }
                    }
                />
                </View>
                <View style={{width:'100%'}}>
                         <Text style={[styles.headingText, { color:'grey', fontSize:18 ,fontWeight:'bold', marginVertical:10, textTransform:'none',marginTop:50}]}>For how long?</Text>
                         <AddComponent onPress={()=>popUpHandler('duration')} theme={themeProvider.theme} title={duration}/>

                </View>
                <TouchableOpacity style={styles.button} onPress={saveData}>
                    <Text  style={styles.buttonText}>Create Habit</Text>
                </TouchableOpacity>
        </View>
        { popUp&&<TextInputPopUp theme={themeProvider.theme} setpopUp={setpopUp} title={title} text={title==='habit'?habit:title==='time'?time:duration} setText={title==='habit'?setHabit:title==='time'?setTime:setDuration}/>}
        </>
     );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:colors.lightTheme.primary,
        paddingTop:40,
        paddingHorizontal:20,
        overflow:'scroll'
    },
    header:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    headingText:{
        fontSize:30,
        textTransform:'capitalize',
        flexDirection:'column',
    },
    headerButtons:{
        flexDirection:'row',
        width:90,
        justifyContent:'space-between',
        alignItems:'center'
    },
    button:{
        width:'100%',
        height:50,
        alignItems:'center',
        borderRadius:25,
        backgroundColor:colors.lightTheme.accent,
        justifyContent:'center',
        marginTop:70
    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
    
    }
 });