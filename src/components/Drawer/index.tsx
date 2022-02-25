import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import Text from '../shared/Text';

import { Header, DrawerListContainer } from './styles';

const DrawerCustom: React.FC<
    DrawerContentComponentProps<DrawerContentOptions>
> = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Header>
                <Text>Seja bem vindo!</Text>
            </Header>
            <DrawerListContainer>
                <DrawerItemList
                    {...props}
                    activeBackgroundColor="#8e24aa"
                    activeTintColor="#fff"
                    inactiveTintColor="#000"
                />
            </DrawerListContainer>
        </DrawerContentScrollView>
    );
};

export default DrawerCustom;
