import { GlobalState } from './Global.interface';

type GlobalAction = { type: 'setLoggedIn' | 'setLoading'; payload: boolean };

export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch (action.type) {
        case 'setLoggedIn':
            return {
                ...state,
                isLoggedIn: action.payload,
            };
        case 'setLoading':
            return {
                ...state,
                isLoading: action.payload,
            };
        default:
            return state;
    }
};
