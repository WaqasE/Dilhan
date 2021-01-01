import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ThemeContext from './app/context/Theme'
import ThemeStorage from './app/context/Storage'
import MoodStore from './app/context/MoodStore'
import StackNavigator from './app/navigation/StackNavigator';
import MoodContext from './app/context/Mood'
import HabitContext from './app/context/Habit'
import HabitStore from './app/context/HabitStore'


export default function App() {
  const [theme, setTheme] = useState('light')
  const [streaks, setStreaks] = useState([])
  const [habits, setHabits] = useState([])

  const restoreToken  = async()=>{
    const token = await ThemeStorage.getToken();
    if(!token)return
    setTheme(token)
    const token1 = await MoodStore.getToken();
    if(!token1) return;
    setStreaks(JSON.parse(token1))
    const token2 = await HabitStore.getToken();
    if(!token2) return;
    setHabits(JSON.parse(token2))
  }

  useEffect(()=>{
    restoreToken()
  },[])


  

  return (
     <ThemeContext.Provider value={{theme, setTheme}}>
         <MoodContext.Provider value={{streaks, setStreaks}}>
            <HabitContext.Provider value={{habits, setHabits}}>
              <NavigationContainer>
                    <StackNavigator/> 
              </NavigationContainer>
            </HabitContext.Provider>
         </MoodContext.Provider>
    </ThemeContext.Provider>
  );  
  
  }



  
