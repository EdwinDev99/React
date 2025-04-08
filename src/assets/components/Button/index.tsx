import { ReactNode } from "react";
import styles from "./Button.module.css";

import { LuSend } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

type Props = {
  children: ReactNode;
  onClick: () => void;
  send?: boolean;
};

// type PropsBtn = {
//   sent: boolean;
// };

function Button({ children, onClick, send }: Props) {
  const styleBtn = [`${styles.button}`].join(" ");
  return (
    <button type="button" onClick={onClick} className={styleBtn}>
      {send ? "Enviado" : children}
      {send ? <FaCheck /> : <LuSend color="whithe" />}
    </button>
  );
}

export default Button;
