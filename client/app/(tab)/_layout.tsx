import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';

const TabRoot = () =>{
    return (
        <Tabs 
            screenOptions={{
                tabBarActiveTintColor: 'blue', // Active tab icon color
                tabBarInactiveTintColor: 'gray', // Inactive tab icon color
                tabBarStyle: { backgroundColor: 'white' ,}, // Optional: Tab bar background color
                headerShown: false,
                
            }}
            
        >
           <Tabs.Screen 
              name="front" 
              options={{title:" Home ",  
              tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
            }} />
            <Tabs.Screen
                name="market"
                options={{title:" Market ",
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="line-chart" color={color} /> 
            }}/>
            <Tabs.Screen 
                name="scanner"
                options={{title:"Scanner",
                    
            }}/>
            <Tabs.Screen 
                name="wallet"
                options={{title:" Wallet ",
                tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="wallet" color={color} /> 
             }}/>
            <Tabs.Screen
             name="history"
             options={{title:" History ",
             tabBarIcon: ({ color }) => <FontAwesome size={28} name="history" color={color} />
            }}/>
        </Tabs>
    );
};

export default TabRoot;