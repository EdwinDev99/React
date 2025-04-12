import { FormEvent, useRef } from "react";

type Props = {};

function Form({}: Props) {
  const namRef = useRef<HTMLInputElement>(null);
  const lastNameref = useRef<HTMLInputElement>(null);
  const handlesubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = {
      name: namRef.current?.value,
      lastname: lastNameref.current?.value,
    };
    console.log(user);
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Nombre
        </label>
        <input ref={namRef} type="text" id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Apellido
        </label>
        <input
          ref={lastNameref}
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
