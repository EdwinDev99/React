import { ReactNode } from "react";
import styled from "styled-components";

type PropsBtn = {
  isLoading?: boolean;
};

const Btn = styled.button<PropsBtn>`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
`;

type Props = {
  children: ReactNode;
  isLoading?: boolean;
  onClick: () => void;
};

function Button({ children, isLoading = false, onClick }: Props) {
  return (
    <Btn
      isLoading={isLoading}
      disabled={isLoading}
      onClick={onClick}
      type="button"
    >
      {isLoading ? "Cargando..." : children}
    </Btn>
  );
}

export default Button;
