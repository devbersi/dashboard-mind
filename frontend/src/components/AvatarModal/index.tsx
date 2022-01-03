import Modal from "react-modal";
import "./styles/AvatarModal.scss";
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

export const AvatarModal = ({ isOpen, onRequestClose }: EditModalProps) => {
  const { register, handleSubmit, control } = useForm<User>();
  const token = localStorage.getItem("Authorization");

  const { rowUser } = useContext(UserContext);

  function onSubmit(values: any) {
    const formData = new FormData();
    formData.append("avatar", values.avatar[0], values.avatar[0].name);
    formData.append("id", values.id);
    api
      .patch("/avatar", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success("Avatar atualizado com sucesso!");
        onRequestClose();
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
          width: "45%",
          height: "54%",
        },
      }}
      className="react-modal-content"
    >
      <form encType="form-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="formContent">
          <h3>Atualizar Avatar</h3>
          <label style={{ textAlign: "start" }} htmlFor="id">
            Identifiador do Usuário
          </label>
          <input
            {...register("id")}
            className="inputAddForm"
            placeholder="Identificador do Usuário"
            value={rowUser.id}
            type="text"
          />
          <input
            {...register("avatar")}
            className="inputFileForm"
            placeholder="Avatar"
            type="file"
            accept="jpg, png, svg, jpeg"
          />

          <button type="submit" className="buttonForm">
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </Modal>
  );
};
