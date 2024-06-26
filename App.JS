
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Homepage from './Homepage';
import Settings from './Settings.JS'; 

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/house.png')
                : require('./assets/house.png');
            } else if (route.name === 'My Cards') {
              iconName = focused
                ? require('./assets/ATM-card.png')
                : require('./assets/ATM-card.png');
            } else if (route.name === 'Statistics') {
              iconName = focused
                ? require('./assets/stat.jpg')
                : require('./assets/stat.jpg');
            } else if (route.name === 'Settings') {
              iconName = focused
                ? require('./assets/settings-icon.png')
                : require('./assets/settings-icon.png');
            }

          
            return <Image source={iconName} style={{ width: 24, height: 24 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="My Cards" component={MyCards} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
