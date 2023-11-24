import React, { createContext, useReducer } from "react";

export const initialState = {theme: "light", data: [],favorites: [],}

export const ContextGlobal = createContext(initialState);

const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_API_DATA":
      return { ...state, data: action.payload };
    case "ADD_TO_FAVORITES":
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ContextGlobal.Provider value={{state,dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
