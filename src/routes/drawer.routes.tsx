/* eslint-disable react/display-name */
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../pages/Main';
import DrawerCustom from '../components/Drawer';

import Feather from 'react-native-vector-icons/Feather';
import IconButton from '../components/shared/IconButton';
import Categories from '../pages/Category/Categories';

interface IDrawerIcon {
    color: string;
}

const DrawerRoutes: React.FC = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={props => DrawerCustom(props)}
            screenOptions={({ navigation }) => ({
                headerShown: true,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    color: '#fff',
                },
                headerStyle: {
                    backgroundColor: '#8e24aa',
                    justifyContent: 'space-between',
                },
                headerLeft: () => (
                    <IconButton
                        icon="menu"
                        color="#fff"
                        style={{ marginLeft: 8 }}
                        onPress={() => {
                            navigation.openDrawer();
                        }}
                    />
                ),
            })}>
            <Drawer.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Home',
                    drawerIcon: function ({ color }: IDrawerIcon) {
                        return <Feather name="home" size={22} color={color} />;
                    },
                }}
            />
            <Drawer.Screen
                name="Despesas"
                component={Main}
                options={{
                    drawerIcon: function ({ color }: IDrawerIcon) {
                        return (
                            <Feather
                                name="dollar-sign"
                                size={22}
                                color={color}
                            />
                        );
                    },
                }}
            />
            <Drawer.Screen
                name="Categorias"
                component={Categories}
                options={{
                    drawerIcon: function ({ color }: IDrawerIcon) {
                        return (
                            <Feather name="package" size={22} color={color} />
                        );
                    },
                }}
            />
            <Drawer.Screen
                name="Configurações"
                component={Main}
                options={{
                    drawerIcon: function ({ color }: IDrawerIcon) {
                        return (
                            <Feather name="sliders" size={22} color={color} />
                        );
                    },
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerRoutes;
