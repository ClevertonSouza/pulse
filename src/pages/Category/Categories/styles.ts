import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ICategory } from '../../../hooks/categories';

export const CategoriesList = styled(FlatList as new () => FlatList<ICategory>)`
    padding: 0px;
`;
