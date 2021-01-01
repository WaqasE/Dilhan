import React, { useContext } from 'react';
import {  StyleSheet,View, StatusBar, Text, FlatList } from 'react-native';

import AppButton from '../comps/AppButton';
import colors from '../config/colors'
import ThemeContext from '../context/Theme'
import HabitContext from '../context/Habit'
import ThemeStorage from '../context/Storage'
import SmallCard from '../comps/SmallCard';
import Card from '../comps/Card';
import Strip from '../comps/Strip';

const list = [
    {
        id:1,
        title:'Self Care',
        color:'#fe5d14'
    },
    {
        id:2,
        title:'Exercise',
         color:'#63adc1'
    },
    {
        id:3,
        title:'Focus',
         color:'#09c9f9'
    },
    {
        id:4,
        title:'Hobby/Skills',
         color:'#00cf72'
    }
]

const card = [
    {
        id:1,
        icon:'flag',
        title:'Achievements',
        details:'see all your',
        bg:'#00b2f9'

    },
    {
        id:2,
        icon:'slightly-smile',
        title:'feeling',
        details:'How are your',
        bg:'#14e1f5',
    }
]





export default function Home({navigation})  {
    const themeProvider = useContext(ThemeContext)
    const {habits} = useContext(HabitContext)
    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.primary}]}>
            <StatusBar hidden={true}/>
            <View style={styles.header}>
                        <View>
                            <Text style={[styles.headingText, {color:themeProvider.theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary}]}>Hello,</Text>
                            <Text style={{fontWeight:'bold', fontSize:40, color:themeProvider.theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary}}>Dilhan</Text>
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
                                onPress={()=>{navigation.navigate('Habit')}}
                                />
                        </View>
            </View>
            <View style={{alignItems:'center',width:'100%',paddingTop:20}}>
                    <Text style={{fontSize:15, fontWeight:'bold', color:'grey'}}>Keep going only <Text style={{color:themeProvider.theme==='light'?colors.lightTheme.accent:colors.darkTheme.accent}}>{habits.length}</Text> habits left today</Text>
                    <FlatList
                        data={list}
                        contentContainerStyle={{marginTop:10}}
                        keyExtractor={item=>item.id.toString()}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={()=>{return(<View style={{height:10}}/>)}}
                        renderItem={
                            ({item})=>{
                                return(
                                    <SmallCard title={item.title} theme={themeProvider.theme} color={item.color}/>
                                );
                            }
                        }
                    />
                      <FlatList
                        data={card}
                        contentContainerStyle={{marginTop:10}}
                        keyExtractor={item=>item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={()=>{return(<View style={{width:10}}/>)}}
                        renderItem={
                            ({item})=>{
                                return(
                                    <Card icon={item.icon} title={item.title} details={item.details} bg={item.bg} onPress={item.title==='feeling'?()=>{navigation.navigate('Mood')}:null}/>
                                );
                            }
                        }
                    />
                    <FlatList
                        data={habits}
                        contentContainerStyle={{marginTop:10,width:'100%'}}
                        keyExtractor={item=>item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        renderItem={
                            ({item})=>{
                                return(
                                    <Strip theme={themeProvider.theme} title={item.habit} onPress={()=>{navigation.navigate('Counter',{habit:item.habit})}}/>
                                );
                            }
                        }
                    />
                    
            </View>
        </View>
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