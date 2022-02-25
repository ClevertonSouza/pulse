import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar, View } from 'react-native';

import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="dark-content" translucent />

        <AppProvider>
            <View style={{ flex: 1 }}>
                <Routes />
            </View>
        </AppProvider>
    </NavigationContainer>
);

export default App;
