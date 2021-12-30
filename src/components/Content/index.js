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
      {lists.map((list) => (
        <ul key={list.id}>
          <ListComponent>
            <li style={{ borderRightColor: `#${list.borderColor}` }}>
              <Link href={`/List/${list.id}`}>
                <a>
                  <div>
                    <h2>{list.name}</h2>
                    {list.items.length} items
                  </div>
                </a>
              </Link>

              <Link href={`/List/${list.id}`}>
                <a>
                  <Image src="/eye.svg" width={30} height={30} />
                </a>
              </Link>
            </li>
          </ListComponent>
        </ul>
      ))}
    </>
  );
}
