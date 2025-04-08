import { ReactNode } from "react";
import styles from "./Alert.module.css";

type Props = {
  children: ReactNode;
  onClick: () => void;
  status?: boolean;
};

function Alert({ children, onClick, status }: Props) {
  return (
    <div
      className={[
        styles.alert,
        status ? styles.alertPrimary : styles.alertSecondary,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Alert;
