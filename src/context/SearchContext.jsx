import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchBar, setSearchBar] = useState("");

    return (
        <SearchContext.Provider value={{ searchBar, setSearchBar }}>
            {children}
        </SearchContext.Provider>
    );
};

export function useSearch() {
    return useContext(SearchContext);
}