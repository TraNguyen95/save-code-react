import { createContext } from 'react';

import { GlobalState } from './Global.interface';

export type GlobalContextProps = {
    globalState: GlobalState;
    setLoggedIn: (data: boolean) => void;
    setLoading: (data: boolean) => void;
    testFunc: () => void;
};

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);
