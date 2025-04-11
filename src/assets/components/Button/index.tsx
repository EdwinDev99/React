import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
}

export default Button;
