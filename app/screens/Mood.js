import React, { useContext, useState, useEffect } from 'react';
import {  StyleSheet,View, StatusBar, Text, FlatList } from 'react-native';
import AppButton from '../comps/AppButton';
import colors from '../config/colors'
import ThemeContext from '../context/Theme'
import ThemeStorage from '../context/Storage'
import MoodContext from '../context/Mood'
import Streak from '../comps/Streak';
import MoodNavigator from '../navigation/MoodNavigator';
import MoodGetter from '../comps/MoodGetter';


export default function Mood()  {
    const themeProvider = useContext(ThemeContext)
    const [popUp, setpopUp]= useState(false)
    const {streaks} = useContext(MoodContext)

    useEffect(()=>{
        console.log(streaks)
    },[streaks])




    return  (
        <>
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.primary}]}>
              <StatusBar hidden={true}/>
            <View style={styles.header}>
                        <View>
                            <Text style={[styles.headingText, {color:themeProvider.theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontWeight:'bold', marginVertical:20}]}>Mood</Text>
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
                                onPress={
                                    ()=>setpopUp(!popUp)
                                }
                                />
                        </View>
            </View>
            <View style={{width:'100%'}}>
                    <View style={{width:'100%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
                                <Text style={[styles.headingText, { color:'grey', fontSize:18 ,fontWeight:'bold', marginVertical:10}]}>Daily Streaks</Text>
                                <Text style={[styles.headingText, { color:themeProvider.theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontSize:13 ,fontWeight:'bold', marginVertical:10, backgroundColor:colors.darkTheme.accent,padding:5, paddingHorizontal:20,borderRadius:10}]}>For this week</Text>
                    </View>
                    <FlatList
                        data={streaks}
                        keyExtractor={item=>item.id.toString()}
                        horizontal={true}
                        ItemSeparatorComponent={()=>{return(<View style={{width:10}}/>)}}
                        ListEmptyComponent={()=>{ return(<Text style={[styles.headingText, { color:'grey', fontSize:15 , marginVertical:10}]}>No Streaks found :(</Text>)}}
                        renderItem={
                            ({item})=>{
                                return(
                                    <Streak theme={themeProvider.theme} day={item.day} id={item.date} icon={item.icon}/>
                                )
                            }
                        }
                    />
                    <MoodNavigator/>
            </View>
        </View>
           { popUp&&<MoodGetter theme={themeProvider.theme} setpopUp={setpopUp}/>}
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
    }
 });