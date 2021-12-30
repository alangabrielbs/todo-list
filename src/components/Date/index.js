import style from "./date.module.css";
import UtilsDate from "../../utils/date";

export default function DateComponent({ type }) {
  const { month, week, year } = UtilsDate();

  return (
    <section className={style.Wrapper}>
      <p>{type ? `${week} de ${month}` : month}</p>

      <div className={style.Year}>
        <p>{year}</p>
      </div>
    </section>
  );
}
