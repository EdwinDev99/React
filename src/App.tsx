import { useState } from "react";
import Button from "./assets/components/Button";

function App() {
  const [send, setSend] = useState(false);
  const handleClick = () => {
    setSend(true);
  };

  return (
    <Button send={send} onClick={handleClick}>
      Enviar
    </Button>
  );
}
export default App;
