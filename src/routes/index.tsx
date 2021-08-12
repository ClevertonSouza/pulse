import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../pages/Main';

const Routes: React.FC = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={Main} />
        </Drawer.Navigator>
    );
};

export default Routes;
