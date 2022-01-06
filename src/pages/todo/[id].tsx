import {
  TrashIcon,
  CheckIcon,
  Pencil1Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { ListComponent } from "../../components/List";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import styles from "./list.module.css";
import useTodo from "../../hooks/todo";
import Modal from "../../components/Modal";
import CheckboxButton from "../../components/Template/CheckboxButton";
import Percentage from "../../components/Percentage";

export default function List() {
  const {
    list,
    handleRemoveTask,
    removeLateralSpaces,
    firstLetterTransformUppercase,
    newTodoModalIsOpen,
    editTodoModalIsOpen,
    openNewTodoModal,
    closeNewTodoModal,
    closeEditTodoModal,
    todoName,
    setTodoName,
    editTodo,
  } = useTodo();

  return (
    <>
      <Date type="list" />

      <Modal
        type="edit"
        isOpen={newTodoModalIsOpen}
        closeModal={closeNewTodoModal}
      />

      <Modal
        type="edit"
        closeModal={closeEditTodoModal}
        isOpen={editTodoModalIsOpen}
        todoState={todoName}
        todoNameDispatch={setTodoName}
      />

      <Layout>
        {list.map((ListProps) => (
          <ul key={ListProps.id}>
            <Head>
              <title>{ListProps.name}</title>
            </Head>

            <ListComponent>
              <div>
                <Link href={`/`}>
                  <a>
                    {ListProps.name} <br />
                    <span>{ListProps.items.length} items</span>
                  </a>
                </Link>

                <Percentage
                  itemsCompletos={
                    ListProps.items.filter((item) => item.isChecked === true)
                      .length
                  }
                  quantidadeDeItems={ListProps.items.length}
                />
              </div>

              <div className={styles.Actions}>
                <button
                  className={styles.Button}
                  aria-label="deletar lista de tarefas"
                  title="deletar lista de tarefas"
                >
                  <TrashIcon onClick={() => handleRemoveTask(ListProps.id)} />
                </button>

                <button className={styles.Button} onClick={openNewTodoModal}>
                  <PlusIcon />
                </button>
              </div>
            </ListComponent>

            <li className={styles.Header}>
              <h3>Nome</h3>
              <h3>Ações</h3>
            </li>

            {ListProps.items.map((itemList, itemIndex) => (
              <ListComponent key={itemIndex}>
                <h4 className={itemList.isChecked ? styles.TextIsChecked : ""}>
                  {removeLateralSpaces(
                    firstLetterTransformUppercase(itemList.name)
                  )}
                </h4>

                <div className={styles.Actions}>
                  <CheckboxButton itemIndex={itemIndex} itemList={itemList} />

                  <button
                    className={styles.Button}
                    onClick={() => editTodo(itemList)}
                  >
                    <Pencil1Icon />
                  </button>
                </div>
              </ListComponent>
            ))}
          </ul>
        ))}
      </Layout>
    </>
  );
}
