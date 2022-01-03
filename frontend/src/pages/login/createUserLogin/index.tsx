import Modal from "react-modal";
import "./styles/createUser.scss";
import { Controller, useForm } from "react-hook-form";
import { User } from "../../tableUser/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputMask from "react-input-mask";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import userSchema from "../../../schema.user";

interface EditModalProps {
  isOpen: any;
  onRequestClose: any;
}

export const AutoCreate = ({ isOpen, onRequestClose }: EditModalProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<User>({
    resolver: yupResolver(userSchema),
    mode: "onChange",
  });

  function formatingValue(values: any) {
    if (values.active === "true") {
      return (values.active = true);
    } else {
      return (values.active = false);
    }
  }

  function onSubmit(values: any) {
    const formData = new FormData();
    if (values.avatar[0]) {
      formData.append("avatar", values.avatar[0], values.avatar[0].name);
    } else {
      formData.append("avatar", "");
    }
    formData.append("name", values.name);
    formData.append("password", values.password);
    formData.append("cpf", values.cpf);
    formData.append("email", values.email);
    formatingValue(values);
    axios
      .post("http://localhost:3001/autoCreate", formData, values)
      .then((response) => {
        toast.success("Usuário criado com sucesso!");
        onRequestClose();
      })
      .catch(() => {
        toast.error("Erro ao criar Usuário ou Usuário Já existente!");
      });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById("root") as HTMLElement}
      ariaHideApp={process.env.NODE_ENV !== "test"}
      overlayClassName="react-modal-overlay"
      style={{
        content: {
          width: "45%",
          height: "74%",
        },
      }}
      className="react-modal-content"
    >
      <form encType="form-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="formContent">
          <h3>Register</h3>
          <input
            {...register("name")}
            className="inputAddForm"
            placeholder="Nome Completo"
            type="text"
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "12px", fontWeight: "700" }}>
              {errors.name.message}
            </p>
          )}
          <input
            {...register("email")}
            className="inputAddForm"
            placeholder="E-mail"
            type="email"
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px", fontWeight: "700" }}>
              {errors.email.message}
            </p>
          )}
          <input
            {...register("password")}
            className="inputAddForm"
            placeholder="Senha"
            type="password"
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px", fontWeight: "700" }}>
              {errors.password.message}
            </p>
          )}
          <Controller
            name="cpf"
            control={control}
            render={() => (
              <InputMask
                mask="999.999.999-99"
                {...register("cpf")}
                name="cpf"
                type="cpf"
              >
                {() => (
                  <input
                    {...register("cpf")}
                    className="inputAddForm"
                    placeholder="CPF"
                    type="cpf"
                  />
                )}
              </InputMask>
            )}
          />
          {errors.cpf && (
            <p style={{ color: "red", fontSize: "12px", fontWeight: "700" }}>
              {errors.cpf.message}
            </p>
          )}
          <select
            {...register("active")}
            placeholder="Usuário Ativo"
            className="inputAddForm"
          >
            <option value=" ">Usuario Ativo</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
          {errors.active && (
            <p style={{ color: "red", fontSize: "12px", fontWeight: "700" }}>
              {errors.active.message}
            </p>
          )}
          <input {...register("avatar")} className="inputAddForm" type="file" />
          <button type="submit" className="buttonForm">
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </Modal>
  );
};
