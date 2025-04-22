import useUser from "./hooks/useUser";

function App() {
  const { users, loading, error } = useUser();

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
