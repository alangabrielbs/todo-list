import { useContext, useEffect, useState, useCallback } from "react";
import Router, { useRouter } from "next/router";

import { ListContext } from "../context/ListsContext/index";
import formate from "../utils/formate";
import { IList, ItemProps } from "../interfaces";

export default function useTodo() {
  const { lists, setLists } = useContext(ListContext);
  const [list, setList] = useState<IList[]>([]);

  const [newTodoModalIsOpen, setNewModalIsOpen] = useState(false);
  const [editTodoModalIsOpen, setEditTodoIsOpen] = useState(false);

  const [todoName, setTodoName] = useState<ItemProps>({
    id: "",
    name: "",
    isChecked: false,
  });

  const router = useRouter();
  const { id } = router.query;

  const { firstLetterTransformUppercase, removeLateralSpaces } = formate();

  useEffect(() => {
    (function getListByArray() {
      const list = lists.filter((item) => item.id === id);
      setList(list);
    })();
  }, [lists, id]);

  const handleRemoveTask = useCallback(
    (id) => {
      const filter = lists.filter((list) => list.id !== id);
      setLists(filter);
      return Router.push("/");
    },
    [lists, setLists]
  );

  function handleChangeATask(__: string, index: number) {
    let listsIndex = 0;
    lists.map((el, index) => (el.id === id ? (listsIndex = index) : ""));

    const filter = lists[listsIndex].items[index];
    const { items } = list[0];

    const newObj = {
      id: filter.id,
      name: filter.name,
      isChecked: filter.isChecked ? false : true,
    };

    const filteredItems = [...items.filter((item) => item !== filter), newObj];
    list[0].items = filteredItems;

    setList(list);

    return handleChangeTodos(list[0], listsIndex);
  }

  function handleChangeTodos(newTodo: IList, arrayIndex: number) {
    return setLists((oldLists) =>
      oldLists.map((todo, i) => (arrayIndex === i ? newTodo : todo))
    );
  }

  function editTodo(todo: ItemProps) {
    setEditTodoIsOpen(true);
    return setTodoName(todo);
  }

  function openNewTodoModal() {
    return setNewModalIsOpen(true);
  }

  function closeNewTodoModal() {
    return setNewModalIsOpen(false);
  }

  function closeEditTodoModal() {
    return setEditTodoIsOpen(false);
  }

  return {
    list,
    handleRemoveTask,
    removeLateralSpaces,
    firstLetterTransformUppercase,
    handleChangeATask,
    newTodoModalIsOpen,
    editTodoModalIsOpen,
    openNewTodoModal,
    closeNewTodoModal,
    closeEditTodoModal,
    todoName,
    editTodo,
    setTodoName,
  };
}
