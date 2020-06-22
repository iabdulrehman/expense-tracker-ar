import React, {  createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

//Creating the initial state
const initialState = {
    transactions:[]
}

//Creating the Global Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addTransaction(id) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        });
    }

    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}