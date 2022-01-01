import { FormEvent, useContext, useState } from "react";
import styles from "./createtodo.module.css";

import { ListContext } from "../../context/ListsContext/index";
import { nanoid } from "nanoid";

interface ItemProps {
  name: string;
  isChecked: boolean;
}

export default function CreateTodo({ isOpen, closeModal }) {
  const { setLists } = useContext(ListContext);

  const [name, setName] = useState("");
  const [tasksInputValue, setTasksInputValue] = useState("");

  function noSpaces(string: string) {
    return string.trim();
  }

  function getRandomArbitrary(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function createNewTodo(event: FormEvent) {
    event.preventDefault();
    const formatedItems: ItemProps[] = [];

    const items = tasksInputValue
      .split(";")
      .map((el) => el.trim())
      .filter((strings) => noSpaces(strings) !== "");

    for (let item in items) {
      const newObject = { name: items[item], isChecked: false };
      formatedItems.push(newObject);
    }

    if (noSpaces(name) === "") return;

    setLists((prevState) => [
      ...prevState,
      {
        id: nanoid(),
        name,
        borderColor: getRandomArbitrary(1000, 9999),
        items: formatedItems,
      },
    ]);

    closeModal();
  }

  return (
    <div className={`${styles.Wrapper} ${!isOpen && styles.disabled}`}>
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
    </div>
  );
}
