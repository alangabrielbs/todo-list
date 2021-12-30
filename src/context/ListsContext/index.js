import { createContext, useEffect, useState } from "react";

export const ListContext = createContext([]);

export default function ListProvider({ children }) {
  const [lists, setLists] = useState([]);

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
