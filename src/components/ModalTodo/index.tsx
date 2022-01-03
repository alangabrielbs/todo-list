import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";

import styles from "./modal.module.css";
import { ModalProps } from "../../interfaces";
import { ListContext } from "../../context/ListsContext";
import { nanoid } from "nanoid";

export function ModalTodo({
  isOpen,
  closeModal,
  todoState,
  todoNameDispatch,
}: ModalProps) {
  const { lists, setLists } = useContext(ListContext);
  const [name, setName] = useState("");

  const router = useRouter();
  const { id } = router.query;

  function createNewTodo(event: FormEvent) {
    event.preventDefault();

    if (name.trim() === "") return;

    const newTodoObject = { id: nanoid(), name, isChecked: false };
    const list = lists.find((list) => list.id === id);
    list.items.push(newTodoObject);

    const oldLists = lists.filter((list) => list.id !== id);

    setLists([list, ...oldLists]);
    setName("");
    closeModal();
  }

  function editTodo(event: FormEvent) {
    event.preventDefault();

    const [otherLists] = lists.filter((list) => list.id !== id);
    const list = lists.find((list) => list.id === id);
    const todos = list.items.filter((todo) => todo.id !== todoState.id);
    todos.push(todoState);
    list.items = todos;

    setLists(() => [list, otherLists]);

    return closeModal();
  }

  return (
    <section className={`${styles.Wrapper} ${isOpen ? "" : styles.disabled}`}>
      <form
        className={styles.FormContent}
        onSubmit={todoState ? editTodo : createNewTodo}
      >
        <input
          placeholder="Adicione uma nova task"
          value={todoState ? todoState.name : name}
          onChange={(e) =>
            todoState
              ? todoNameDispatch({
                  id: todoState.id,
                  name: e.target.value,
                  isChecked: todoState.isChecked,
                })
              : setName(e.target.value)
          }
        />

        <div className={styles.ButtonsContainer}>
          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </section>
  );
}
