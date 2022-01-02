import { FormEvent, useContext, useState } from "react";
import styles from "./modal.module.css";
import { ModalProps, ItemProps } from "../../interfaces";
import { ListContext } from "../../context/ListsContext";
import { nanoid } from "nanoid";

export function ModalList({ isOpen, closeModal }: ModalProps) {
  const { setLists } = useContext(ListContext);
  const [tasksInputValue, setTasksInputValue] = useState("");
  const [name, setName] = useState("");

  function createNewTodo(event: FormEvent) {
    event.preventDefault();
    const formatedItems: ItemProps[] = [];

    function getRandomBorderColor(min: number, max: number) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const items = tasksInputValue
      .split(";")
      .map((el) => el.trim())
      .filter((strings) => strings.trim() !== "");

    for (let item in items) {
      const newObject = { id: nanoid(), name: items[item], isChecked: false };
      formatedItems.push(newObject);
    }

    if (name.trim() === "") return;

    setLists((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        name,
        borderColor: getRandomBorderColor(1000, 9999),
        items: formatedItems,
      },
    ]);

    closeModal();
  }

  return (
    <section className={`${styles.Wrapper} ${isOpen ? "" : styles.disabled}`}>
      <form className={styles.FormContent} onSubmit={createNewTodo}>
        <div>
          <input
            placeholder="Nome da lista"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Adicione quais são as tarefas desejadas para está lista"
            value={tasksInputValue}
            onChange={(e) => setTasksInputValue(e.target.value)}
          />
          <p>Por favor, separe por ; as suas tarefas!</p>
        </div>

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
