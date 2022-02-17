import {
    DrawerContentComponentProps,
    DrawerContentOptions,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';

import { Header, WelcomeText, DrawerListContainer } from './styles';

const DrawerCustom: React.FC<
    DrawerContentComponentProps<DrawerContentOptions>
> = props => {
    return (
        <DrawerContentScrollView {...props}>
            <Header>
                <WelcomeText>Seja bem vindo!</WelcomeText>
            </Header>
            <DrawerListContainer>
                <DrawerItemList {...props} />
            </DrawerListContainer>
        </DrawerContentScrollView>
    );
};

export default DrawerCustom;
