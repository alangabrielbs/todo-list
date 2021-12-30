import style from "./list.module.css";

export function ListComponent({ children }) {
  return <section className={style.Wrapper}>{children}</section>;
}
