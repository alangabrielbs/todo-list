import { createContext, useContext, useEffect, useState } from "react";

import { IList, IListContext } from "../../interfaces/index";

export const ListContext = createContext<IListContext>({} as IListContext);

export default function ListProvider({ children }) {
  const [lists, setLists] = useState<IList[]>([]);

  useEffect(() => {
    const getLocalStorageTodos = localStorage.getItem("myTodoList");

    if (!!JSON.parse(getLocalStorageTodos)) {
      localStorage.setItem("myTodoList", getLocalStorageTodos);
      return setLists(JSON.parse(getLocalStorageTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myTodoList", JSON.stringify(lists));
  }, [lists]);

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      {children}
    </ListContext.Provider>
  );
}

export function useListContext() {
  const context = useContext(ListContext);

  if (!context)
    throw new Error("useListContext must be used within a ListProvider");

  const { lists, setLists } = context;
  return { lists, setLists };
}
