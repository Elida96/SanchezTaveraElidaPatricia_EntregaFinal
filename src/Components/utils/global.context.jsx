// ContextGlobal.js
import React, { createContext, useMemo, useReducer, useEffect } from "react";

export const initialState = { theme: "light", data: [], favorites: [] };


const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Guardar en localStorage
      return {
        ...state,
        theme: newTheme,
      };
      case "ADD_TO_FAVORITES":
        const newFavorites = [...state.favorites, action.payload];
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        return {
          ...state,
          favorites: newFavorites,
        };
      case "GET_FAVORITES_FROM_STORAGE":
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        return {
          ...state,
          favorites: storedFavorites,
        };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  // Recuperar el tema del localStorage al inicio
  const initialTheme = localStorage.getItem("theme") || initialState.theme;

  const [state, dispatch] = useReducer(reducer, {...initialState,theme: initialTheme});

  // Guardar el tema en localStorage cuando cambie
    useEffect(() => {
      localStorage.setItem("theme", state.theme);
    }, [state.theme]);

  const contextValue = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

