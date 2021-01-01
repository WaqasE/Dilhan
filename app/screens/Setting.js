import React, { useContext } from 'react';
import {  StyleSheet,View, StatusBar, Text, FlatList, TouchableOpacity } from 'react-native';
import AppButton from '../comps/AppButton';
import colors from '../config/colors'
import ThemeContext from '../context/Theme'
import ThemeStorage from '../context/Storage'


export default function Setting()  {
    const themeProvider = useContext(ThemeContext)
    return  (
        <View style={[styles.container,{backgroundColor:themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.primary}]}>
            <StatusBar hidden={true}/>
            <View style={styles.header}>
                        <View>
                            <Text style={[styles.headingText, {color:themeProvider.theme==='light'?colors.lightTheme.secondary:colors.darkTheme.secondary, fontWeight:'bold', marginVertical:20}]}>Settings</Text>
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