import { useContext } from 'react';

import { GlobalContext } from '../context/Global/GlobalContext';

export const useGlobal = () => {
    const { globalState, setLoggedIn, setLoading, testFunc } = useContext(GlobalContext);
    const { isLoading, isLoggedIn } = globalState;
    return {
        isLoading: isLoading,
        isLoggedIn: isLoggedIn,
        setLoggedIn,
        setLoading,
        testFunc,
    };
};
