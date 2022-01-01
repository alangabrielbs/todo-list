import style from "./list.module.css";

export function ListComponent({ children, borderColor }) {
  return (
    <li className={style.Wrapper} style={{ borderRightColor: borderColor }}>
      {children}
    </li>
  );
}
