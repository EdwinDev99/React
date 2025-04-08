import { useState } from "react";
import Alert from "./assets/components/Alert";

function App() {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => {
    setStatus(!status);
  };
  return (
    <Alert onClick={toggleStatus} status={status}>
      Alert
    </Alert>
  );
}
export default App;
