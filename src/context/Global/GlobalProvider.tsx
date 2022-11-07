import { useReducer } from 'react';

import { GlobalState } from './Global.interface';
import { GlobalContext } from './GlobalContext';
import { globalReducer } from './GlobalReducer';

const INITIAL_STATE: GlobalState = {
    isLoggedIn: !!localStorage.getItem('access_token'),
    isLoading: false,
    isTest: 1,
};

interface props {
    children: JSX.Element | JSX.Element[];
}

export const GlobalProvider = ({ children }: props) => {
    const [globalState, dispatch] = useReducer(globalReducer, INITIAL_STATE);

    const setLoggedIn = (isLoggedIn: boolean) => {
        dispatch({ type: 'setLoggedIn', payload: isLoggedIn });
    };

    const setLoading = (isLoading: boolean) => {
        dispatch({ type: 'setLoading', payload: isLoading });
    };

    const testFunc = () => {
        console.log('Test func');
    };

    return (
        <GlobalContext.Provider
            value={{
                globalState,
                setLoggedIn,
                setLoading,
                testFunc,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
