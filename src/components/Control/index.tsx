import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Modal from "../Modal";
import styles from "./control.module.css";

export default function Control() {
  const [createTodoModalIsOpen, setCreateTodoModalIsOpen] = useState(false);

  function closeModal() {
    return setCreateTodoModalIsOpen(false);
  }

  function openModal() {
    return setCreateTodoModalIsOpen(true);
  }

  return (
    <>
      <Modal
        type="create"
        isOpen={createTodoModalIsOpen}
        closeModal={closeModal}
      />
      <nav className={styles.Wrapper}>
        <button
          className={styles.AddTodo}
          onClick={openModal}
          aria-label="abrir modal"
        >
          <span>Adicionar nova tarefa</span>
          {/* <PlusIcon /> */}
        </button>
      </nav>
    </>
  );
}
