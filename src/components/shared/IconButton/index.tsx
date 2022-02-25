import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';

import { Button } from './styles';

interface IRectIconButtonProps extends RectButtonProperties {
    icon: string;
    color?: string;
}

const IconButton: React.FC<IRectIconButtonProps> = ({
    icon,
    color,
    ...rest
}) => (
    <Button {...rest}>
        <Feather name={icon} size={24} color={color} />
    </Button>
);

export default IconButton;
