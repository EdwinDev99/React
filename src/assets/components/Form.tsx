import { FormEvent, useState } from "react";

type Props = {};

function Form({}: Props) {
  const [user, setUser] = useState({ name: "", lastName: "" });
  const handlesubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Nombre
        </label>
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Apellido
        </label>
        <input
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          type="text"
          id="lastname"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Enviar</button>
    </form>
  );
}

export default Form;
