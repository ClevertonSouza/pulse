import { useNavigation } from '@react-navigation/native';
import React from 'react';
import FloatingAction from '../../../components/shared/FloatingAction';
import Text from '../../../components/shared/Text';
import { useCategories } from '../../../hooks/categories';
import { CategoriesList } from './styles';

const Categories: React.FC = () => {
    const { categories } = useCategories();

    const { navigate } = useNavigation();

    const handleCreateNewCategory = () => {
        navigate('CategoriesNew');
    };

    return (
        <>
            <CategoriesList
                data={categories}
                keyExtractor={category => category.id}
                renderItem={({ item: category }) => (
                    <Text>{category.name}</Text>
                )}
            />
            <FloatingAction icon="plus" onPress={handleCreateNewCategory} />
        </>
    );
};

export default Categories;
