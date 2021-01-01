import React,{ useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather, MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Mood from '../screens/Mood'
import Setting from '../screens/Setting'
import ThemeContext from '../context/Theme'

import colors from '../config/colors'

export default AppNavigator = ()=>{
    const themeProvider = useContext(ThemeContext)
    const Tabs = createBottomTabNavigator();
    return(
        <Tabs.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor:themeProvider.theme==='light'?colors.lightTheme.accent:colors.darkTheme.accent,
                inactiveTintColor:'#c4c4c4',
                style:{backgroundColor:themeProvider.theme==='light'?colors.lightTheme.primary:colors.darkTheme.primary, height:60}
            }}
            
            
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size=25 }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home';
                } 
                else if (route.name === 'Mood') {
                    iconName = focused 
                    ? 'mood'
                        : 'mood';
                }
                else if (route.name === 'Setting') {
                    iconName = focused 
                    ? 'settings'
                    : 'settings'
                }
                 // You can return any component that you like here!
                 return <MaterialIcons name={iconName} size={size} color={color} />
             },
             })}
               
            >
            <Tabs.Screen 
                options={{
                    tabBarLabel: '',
                }}
                name="Home"
                component={Home}
            />
            <Tabs.Screen
                options={{
                        tabBarLabel: '',
                    }}
                 name="Mood"
                 component={Mood}
            />
            <Tabs.Screen 
                options={{
                        tabBarLabel: '',
                    }}
                name="Setting" 
                component={Setting}
            />
        </Tabs.Navigator>
    )
}