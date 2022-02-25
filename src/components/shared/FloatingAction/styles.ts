import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    position: absolute;
    right: 0px;
    bottom: 0px;

    border: transparent;
`;

export const FloatingActionButton = styled(RectButton)`
    width: 60px;
    height: 60px;
    background: #8e24aa;

    border-radius: 30px;
    margin: 8px;

    justify-content: center;
    align-items: center;
`;
