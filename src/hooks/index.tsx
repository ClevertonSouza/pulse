import React from 'react';
import { CategoriesProvider } from './categories';

const AppProvider: React.FC = ({ children }) => {
    return <CategoriesProvider>{children}</CategoriesProvider>;
};

export default AppProvider;
