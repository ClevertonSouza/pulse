import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Container, FloatingActionButton } from './styles';

interface FloatingActionProps {
    icon: string;
    onPress: () => void;
}

const FloatingAction: React.FC<FloatingActionProps> = ({ icon, onPress }) => {
    return (
        <Container>
            <FloatingActionButton onPress={onPress}>
                <Icon name={icon} size={24} color="#fff" />
            </FloatingActionButton>
        </Container>
    );
};

export default FloatingAction;
