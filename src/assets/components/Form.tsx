import { useForm } from "react-hook-form";

type Form = {
  name: string;
  lastname: string;
};
type Props = {};

function Form({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Nombre
        </label>
        <input
          {...register("name", {
            minLength: {
              value: 3,
              message: "El largo minimo es 3",
            },
          })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors?.name && <p>{errors?.name?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Apellido
        </label>
        <input
          {...register("lastname")}
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
