import { useContext, useEffect, useState, useCallback } from "react";
import { TrashIcon, CheckIcon } from "@radix-ui/react-icons";
import { ListContext } from "../../context/ListsContext/index";
import { ListComponent } from "../../components/List";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import styles from "./list.module.css";
import formate from "../../utils/formate";

export default function List() {
  const { lists, setLists } = useContext(ListContext);
  const [list, setList] = useState([]);

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

  function handleChangeATask(__, index) {
    let listsIndex = 0;
    lists.map((el, index) => (el.id === id ? (listsIndex = index) : ""));

    const filter = lists[listsIndex].items[index];
    const { items } = list[0];

    const newObj = {
      name: filter.name,
      isChecked: filter.isChecked ? false : true,
    };

    const filteredItems = [...items.filter((item) => item !== filter), newObj];
    list[0].items = filteredItems;

    setList(list);

    return handleChangeTodos(list[0], listsIndex);
  }

  function handleChangeTodos(newTodo, arrayIndex) {
    return setLists((oldLists) =>
      oldLists.map((todo, i) => (arrayIndex === i ? newTodo : todo))
    );
  }

  return (
    <>
      <Date type={1} />
      <Layout>
        {list.map((ListProps) => (
          <section key={ListProps.id}>
            <Head>
              <title>{ListProps.name}</title>
            </Head>

            <ul>
              <ListComponent>
                <li style={{ borderRightColor: `#${ListProps.borderColor}` }}>
                  <Link href={`/`}>
                    <a>
                      <div>
                        <h2>{ListProps.name}</h2>
                        {ListProps.items.length} items
                      </div>
                    </a>
                  </Link>

                  <button className={styles.Button}>
                    <TrashIcon onClick={() => handleRemoveTask(ListProps.id)} />
                  </button>
                </li>
              </ListComponent>
            </ul>

            {ListProps.items.map((itemList, itemIndex) => (
              <section key={itemIndex}>
                <ListComponent>
                  <ul>
                    <li
                      className={`${styles.List} ${
                        itemList.isChecked ? styles.IsChecked : ""
                      }`}
                    >
                      <h4>
                        {removeLateralSpaces(
                          firstLetterTransformUppercase(itemList.name)
                        )}
                      </h4>

                      <div
                        className={styles.Square}
                        onClick={() =>
                          handleChangeATask(itemList.name, itemIndex)
                        }
                      >
                        {itemList.isChecked ? <CheckIcon /> : ""}
                      </div>
                    </li>
                  </ul>
                </ListComponent>
              </section>
            ))}
          </section>
        ))}
      </Layout>
    </>
  );
}
