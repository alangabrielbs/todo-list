import styles from "./layout.module.css";
import { IChildren } from "../../interfaces";

export default function Layout({ children }: IChildren) {
  return <div className={styles.Wrapper}>{children}</div>;
}
