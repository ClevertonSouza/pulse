import React from 'react';

import { TextLabel } from './styles';

const Text: React.FC = ({ ...rest }) => {
    return <TextLabel {...rest} />;
};

export default Text;
