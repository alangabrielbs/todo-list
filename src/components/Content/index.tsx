import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useListContext } from "../../context/ListsContext";
import { ListComponent } from "../List";
import ListLink from "../Template/ListLink";

export default function Content() {
  const { lists } = useListContext();

  return (
    <>
      <Head>
        <title>Todo-list</title>
      </Head>

      <ul>
        {lists.map((list) => (
          <ListComponent borderColor={`#${list.borderColor}`} key={list.id}>
            <ListLink id={list.id} items={list.items} name={list.name} />

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
