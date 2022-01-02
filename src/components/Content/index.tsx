import Link from "next/link";
import Image from "next/image";

import { useContext } from "react";

import { ListContext } from "../../context/ListsContext";
import { ListComponent } from "../List";
import Head from "next/head";

export default function Content() {
  const { lists } = useContext(ListContext);

  return (
    <>
      <Head>
        <title>Home - todo-list klinkonskydev</title>
      </Head>
      <ul>
        {lists.map((list) => (
          <ListComponent borderColor={`#${list.borderColor}`} key={list.id}>
            <Link href={`/todo/${list.id}`}>
              <a>
                {list.name} <br />
                <span>{list.items.length} items</span>
              </a>
            </Link>

            <Link href={`/todo/${list.id}`}>
              <a style={{ filter: "invert(1)" }}>
                <Image
                  src="/eye.svg"
                  width={30}
                  height={30}
                  alt="visualizar a task"
                  priority
                />
              </a>
            </Link>
          </ListComponent>
        ))}
      </ul>
    </>
  );
}
