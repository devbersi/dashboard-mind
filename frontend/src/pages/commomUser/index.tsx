import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import "./styles/home.scss";
import RingLoader from "react-spinners/RingLoader";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { User } from "../tableUser/types";

type UserProfile = {
  avatar: string;
  email: string;
  name: string;
  cpf: string;
  id: string;
};

export const NotAdministrator = () => {
  const [profile, setProfile] = useState<UserProfile>({} as UserProfile);
  const [loading, setLoading] = useState(true);
  const { handleSubmit, register } = useForm<User>();
  const [enabled, setEnabled] = useState(true);

  function enabledInputs() {
    enabled ? setEnabled(false) : setEnabled(true);
  }

  useEffect(() => {
    const user = localStorage.getItem("User");
    api
      .get(`/me/${user}`)
      .then((response) => {
        setProfile({
          avatar: response.data.avatar,
          name: response.data.name,
          email: response.data.email,
          cpf: response.data.cpf,
          id: response.data.id,
        });
      })
      .catch(() => {
        toast.error("Falha ao carregar perfil!");
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  function onSubmit(values: any) {
    const formData = new FormData();
    if (values.avatar[0]) {
      formData.append("avatar", values.avatar[0], values.avatar[0].name);
    }
    formData.append("name", values.name);
    formData.append("password", values.password);
    formData.append("cpf", values.cpf);
    formData.append("email", values.email);
    console.log(values);
    api
      .put(`/edit/${profile.id}`, formData)
      .then((response) => {
        toast.success("Dados editados com sucesso");
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch(() => {
        toast.error("Erro ao editar seus dados!");
      });
  }

  function logOut() {
    localStorage.removeItem("Authorization");
    window.location.reload();
  }

  return (
    <div className="homePage">
      <Sidebar />
      {loading ? (
        <RingLoader size={80} color={"#2E2E2E"} loading={loading} />
      ) : (
        <form
          encType="form-data"
          onSubmit={handleSubmit(onSubmit)}
          className="profileUser"
        >
          <div className="top">
            <div>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              <img
                src={require(`../../../../backend/tmp/avatar/${profile?.avatar}`)}
                alt="Profile Photo"
              />
            </div>
          </div>
          <div className="data">
            <label>Nome: </label>
            <input
              {...register("name")}
              defaultValue={profile.name}
              className="profileInput"
              type="text"
            />
            <label>E-mail: </label>
            <input
              {...register("email")}
              defaultValue={profile.email}
              className="profileInput"
              type="email"
            />
            <label>CPF: </label>
            <input
              {...register("cpf")}
              defaultValue={profile.cpf}
              className="profileInput"
              type="text"
            />
            <label>Senha: </label>
            <input
              {...register("password")}
              placeholder="Caso Deseje, insira uma nova senha..."
              className="profileInput"
              type="password"
            />
            <label>Foto de Perfil: </label>
            <input
              {...register("avatar")}
              className="profileInput"
              type="file"
            />
          </div>
          <div className="buttons">
            <button type="button" onClick={enabledInputs} className="edit">
              Editar
            </button>
            {enabled ? (
              <button type="button" className="logout" onClick={logOut}>
                Logout
              </button>
            ) : (
              <button type="submit" className="send">
                Enviar
              </button>
            )}
          </div>
        </form>
      )}
      <ToastContainer />
    </div>
  );
};
