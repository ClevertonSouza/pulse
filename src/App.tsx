import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar, View } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar
            barStyle="dark-content"
            backgroundColor="#312E38"
            translucent
        />

        <View style={{ flex: 1, backgroundColor: '#312E38' }}>
            <Routes />
        </View>
    </NavigationContainer>
);

export default App;
