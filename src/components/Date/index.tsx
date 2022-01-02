import style from "./date.module.css";
import UtilsDate from "../../utils/date";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function DateComponent({ type }) {
  const { month, year, date } = UtilsDate();

  return (
    <section className={style.Wrapper}>
      <div className={style.Content}>
        {type ? (
          <Link href={"/"}>
            <a>
              <ArrowLeftIcon />
            </a>
          </Link>
        ) : (
          ""
        )}

        <p>
          {type
            ? `${new Intl.DateTimeFormat("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              }).format(date)}`
            : month}
        </p>
      </div>

      <div className={style.Year}>
        <p>{year}</p>
      </div>
    </section>
  );
}
