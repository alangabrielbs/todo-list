import { FormEvent, useContext, useState } from "react";
import styles from "./modal.module.css";
import { ModalProps, ItemProps } from "../../interfaces";
import { ListContext } from "../../context/ListsContext";

export function ModalTodo({ isOpen, closeModal, pageId }: ModalProps) {
  const { lists, setLists } = useContext(ListContext);
  const [name, setName] = useState("");

  function createNewTodo(event: FormEvent) {
    event.preventDefault();
    const newTodoObject = { name, isChecked: false };
    const newTodo = lists.filter((list) => list.id === pageId)[0];
    newTodo.items.push(newTodoObject);

    const oldLists = lists.filter((list) => list.id !== pageId);

    setLists([...oldLists, newTodo]);
    return closeModal();
  }

  return (
    <div className={`${styles.Wrapper} ${isOpen ? "" : styles.disabled}`}>
      <form className={styles.FormContent} onSubmit={createNewTodo}>
        <input
          placeholder="Adicione uma nova task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className={styles.ButtonsContainer}>
          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
          <button type="submit">Adicionar</button>
        </div>
      </form>
    </div>
  );
}
