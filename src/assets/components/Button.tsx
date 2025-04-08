import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoadin?: boolean;
  onClick: () => void;
};

function Button({ children, isLoadin, onClick }: Props) {
  return (
    <button
      disabled={isLoadin}
      onClick={onClick}
      type="button"
      className={`btn btn-${isLoadin ? "secondary" : "primary"}`}
    >
      {isLoadin ? "continue.... " : children}
    </button>
  );
}

export default Button;
