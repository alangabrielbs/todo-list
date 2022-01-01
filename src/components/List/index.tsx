import style from "./list.module.css";
import { ListComponentProps } from "../../interfaces";

export function ListComponent({ children, borderColor }: ListComponentProps) {
  return (
    <li className={style.Wrapper} style={{ borderRightColor: borderColor }}>
      {children}
    </li>
  );
}
