import { use, useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/xusers";
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`${response.status}`);
        return response.json() as Promise<User[]>;
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error: Error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Cargango....</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error {error}</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
export default App;
