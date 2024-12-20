import React, { createContext, useState, useContext } from "react";

// Create context
const SearchContext = createContext();

// Custom hook to use the search context
export const useSearch = () => useContext(SearchContext);

// SearchProvider component to provide search term across components
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
