import { View, Text, Image } from 'react-native'
import React from 'react';
import { icons } from '../../constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Market from './market';
import Wallet from './wallet';
import Insights from './insights';

const TabIcon = ({ icon, color }: { icon: any; color: any; }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
            height: 82,
            borderTopWidth: 0,
            position: 'static',
            }
        }}
    >
        <Tab.Screen 
            name='home'
            options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }: { color: any; }) => (
                <TabIcon 
                icon={icons.home}
                color={color}
                />
            )
            }}
            component={Home}
        />
        <Tab.Screen 
            name='market'
            options={{
            title: 'Market',
            headerShown: false,
            tabBarIcon: ({ color }: { color: any; }) => (
                <TabIcon 
                icon={icons.statistics}
                color={color}
                />
            )
            }}
            component={Market}
        />
        <Tab.Screen 
            name='wallet'
            options={{
            title: 'Wallet',
            headerShown: false,
            tabBarIcon: ({ color }: { color: any; }) => (
                <TabIcon 
                icon={icons.wallet}
                color={color}
                />
            )
            }}
            component={Wallet}
        />
        <Tab.Screen 
            name='insights'
            options={{
            title: 'Insights',
            headerShown: false,
            tabBarIcon: ({ color }: { color: any; }) => (
                <TabIcon 
                icon={icons.insights}
                color={color}
                />
            )
            }}
            component={Insights}
        />
    </Tab.Navigator>
  )
}

export default TabLayout