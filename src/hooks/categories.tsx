import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

interface ICategoriesContext {
    categories: ICategory[];
    saveCategory: (data: Omit<ICategory, 'id'>) => void;
}

export interface ICategory {
    id: string;
    name: string;
}

const CategoriesContext = createContext<ICategoriesContext>(
    {} as ICategoriesContext,
);

const CategoriesProvider: React.FC = ({ children }) => {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const saveCategory = useCallback((data: Omit<ICategory, 'id'>) => {
        const newCategory: ICategory = {
            ...data,
            id: (Math.random() * 999999 + 1).toString(),
        };

        setCategories([...categories, newCategory]);
    }, []);

    const values = useMemo(
        () => ({ categories, saveCategory }),
        [categories, saveCategory],
    );

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    );
};

function useCategories(): ICategoriesContext {
    const context = useContext(CategoriesContext);

    if (!context) {
        throw new Error(
            'useCategories must be used within an CategoryProvider',
        );
    }

    return context;
}

export { useCategories, CategoriesProvider };
