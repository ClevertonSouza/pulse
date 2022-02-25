/* eslint-disable react/display-name */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';
import Main from '../pages/Main';
import Categories from '../pages/Category/Categories';
import CategoriesNew from '../pages/Category/CategoriesNew';

const AppRoutes: React.FC = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer independent>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={DrawerRoutes}
                    options={{ headerShown: false, gestureEnabled: false }}
                />
                <Stack.Screen name="Despesas" component={Main} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="CategoriesNew" component={CategoriesNew} />
                <Stack.Screen name="Configurations" component={CategoriesNew} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppRoutes;
