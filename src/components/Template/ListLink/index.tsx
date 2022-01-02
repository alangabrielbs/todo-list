import Link from "next/link";
import { ListLinkProps } from "../../../interfaces";

export default function ListLink({ id, name, items }: ListLinkProps) {
  return (
    <Link href={id ? `/todo/${id}` : "/"}>
      <a>
        {name} <br />
        <span>
          {items.length > 2 ? `${items.length} items` : `${items.length} item`}{" "}
        </span>
      </a>
    </Link>
  );
}
