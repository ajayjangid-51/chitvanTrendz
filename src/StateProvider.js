import React, { createContext, useContext, useReducer } from "react";
// function-no.1
export const StateContext = createContext();

// function-no.2 (this function wrap our app and provide the datalayer accesible to all components)
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// function-no.3(by this we can pullup data from datalayer)
export const useStateValue = () => useContext(StateContext);
