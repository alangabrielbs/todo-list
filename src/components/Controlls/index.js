import { useState } from "react";
import CreateTodo from "../CreateTodo";
import styles from "./controlls.module.css";

export default function Controlls() {
  const [createTodoModalIsOpen, setCreateTodoModalIsOpen] = useState(false);

  function closeModal() {
    return setCreateTodoModalIsOpen(false);
  }

  function openModal() {
    return setCreateTodoModalIsOpen(true);
  }

  return (
    <>
      <CreateTodo isOpen={createTodoModalIsOpen} closeModal={closeModal} />
      <nav className={styles.Wrapper}>
        <button
          className={styles.AddTodo}
          onClick={openModal}
          aria-label="abrir modal"
        >
          +
        </button>
      </nav>
    </>
  );
}
