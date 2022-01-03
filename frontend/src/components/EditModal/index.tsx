import Modal from "react-modal";
import "./styles/EditModal.scss";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { User } from "../../pages/tableUser/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";

interface EditModalProps {
  isOpen: any;
  onRequestClose: any;
}

export const EditModal = ({ isOpen, onRequestClose }: EditModalProps) => {
  const { register, handleSubmit, control } = useForm<User>();
  const { rowUser } = useContext(UserContext);

  function formatingActive(values: any) {
    if (values.active === "true") {
      return (values.active = true);
    } else {
      return (values.active = false);
    }
  }

  function formatingAdministrator(values: any) {
    if (values.administrator === "true") {
      return (values.administrator = true);
    } else {
      return (values.administrator = false);
    }
  }

  function onSubmit(values: any) {
    formatingActive(values);
    formatingAdministrator(values);
    console.log(values);
    api
      .put(`/adminEdit/${rowUser.id}`, values)
      .then((response) => {
        onRequestClose();
        toast.success("Avatar atualizado com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao atualizar avatar!");
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
          width: "55vw",
          height: "90vh",
        },
      }}
      className="react-modal-content"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formContent">
          <h3>Editar Usuário</h3>
          <div className="divEdit">
            <label htmlFor="name">Nome:</label>
            <input
              {...register("name")}
              className="inputAddForm"
              placeholder="Identificador do Usuário"
              defaultValue={rowUser.name}
              type="text"
            />
          </div>
          <div className="divEdit">
            <label htmlFor="email">E-mail:</label>
            <input
              {...register("email")}
              className="inputAddForm"
              placeholder="Identificador do Usuário"
              defaultValue={rowUser.email}
              type="text"
            />
          </div>
          <div className="divEdit">
            <label htmlFor="cpf">CPF:</label>
            <input
              {...register("cpf")}
              className="inputAddForm"
              placeholder="Identificador do Usuário"
              defaultValue={rowUser.cpf}
              type="text"
            />
          </div>
          <div className="divEdit">
            <label htmlFor="administrator">Administrador:</label>
            <select
              {...register("administrator")}
              defaultValue={rowUser.administrator}
              placeholder="Usuário Ativo"
              className="inputAddForm"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>
          <div className="divEdit">
            <label htmlFor="active">Usuário ativo:</label>
            <select
              {...register("active")}
              defaultValue={rowUser.active}
              placeholder="Usuário Ativo"
              className="inputAddForm"
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>
          <div className="buttonEdit">
            <button type="submit" className="buttonForm">
              Send
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </Modal>
  );
};
