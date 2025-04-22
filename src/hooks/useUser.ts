import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
};

export default function () {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const controller = new AbortController(); // nos permite cancelar la efecucion de fetch
    const { signal } = controller;
    async function hook() {
      const url = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);
      setError(undefined);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) throw new Error(`${response.status}`);
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }
    hook();
    return () => controller.abort();
  }, []);
  return { users, loading, error };
}
