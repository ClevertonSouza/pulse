import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../pages/Main';
import DrawerCustom from './Drawer/drawer';

const Routes: React.FC = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={props => DrawerCustom(props)}
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    justifyContent: 'space-between',
                },
            }}>
            <Drawer.Screen name="Main" component={Main} />
        </Drawer.Navigator>
    );
};

export default Routes;
