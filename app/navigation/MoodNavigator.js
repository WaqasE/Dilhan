import React, {useContext} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ThemeContext from '../context/Theme'
import colors from '../config/colors';
import Week from '../comps/Week'
import Month from '../comps/Month'

export default PostNavigator = ()=>{
    const themeProvider = useContext(ThemeContext)
    const Tabs = createMaterialTopTabNavigator();
    return(
        <Tabs.Navigator
            
            initialRouteName="Week"
            
            tabBarOptions={{
                activeTintColor:'#000000',
                inactiveTintColor:'white',
                indicatorStyle:{height:'100%',width:'50%',  borderRadius:20,backgroundColor:'white'},
                labelStyle:{textTransform:'capitalize',fontSize:18,letterSpacing:0.5},
                style: {
                    backgroundColor:themeProvider.theme==='light'?'#d9d9d9':'#666666',
                    height:40,
                    justifyContent:'center',
                    width:'80%',
                    alignSelf:'center',
                    marginVertical:20,
                    borderRadius:20,
                    alignContent:'center',
                    padding:0,

                    },
            }}>
            <Tabs.Screen 
                options={{
                    tabBarLabel: 'Week',
                }}
                name="Week"
                component={Week}
            />
            <Tabs.Screen

                options={{
                        tabBarLabel: 'Month',
                    }}
                 name="Month"
                 component={Month}
            />
           
        </Tabs.Navigator>
    )
}

