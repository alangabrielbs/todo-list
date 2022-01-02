import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./list.module.css";
import todoHooks from "../../../hooks/todo";

export default function CheckboxButton({ itemList, itemIndex }) {
  const { handleChangeATask } = todoHooks();

  return (
    <button
      className={`${styles.Checkbox} ${
        itemList.isChecked ? styles.IsChecked : ""
      }`}
      aria-label="Marcar tarefa como concluida"
      title="Marcar tarefa como concluida"
      onClick={() => handleChangeATask("", itemIndex)}
    >
      {itemList.isChecked ? <CheckIcon /> : ""}
    </button>
  );
}
