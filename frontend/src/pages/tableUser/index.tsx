import { useContext, useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Sidebar } from "../../components/Sidebar";
import "./styles/table.scss";
import { AddModal } from "../../components/AddModal";
import { AvatarModal } from "../../components/AvatarModal";
import { EditModal } from "../../components/EditModal";
import { api } from "../../services/api";
import { User } from "./types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Contexts/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RingLoader from "react-spinners/RingLoader";

export const Table = () => {
  const [addModal, setAddModal] = useState(false);
  const [avatarModal, setAvatarModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const { deleteUser, setRowUser } = useContext(UserContext);

  function handleDeleteUser(rowData: any) {
    const { id } = rowData;

    deleteUser(id);
    window.location.reload();
  }

  function handleCloseAddModal() {
    setAddModal(false);
    window.location.reload();
  }

  function handleOpenAddModal() {
    setAddModal(true);
  }

  function handleAvatarModalClose() {
    setAvatarModal(false);
    window.location.reload();
  }

  function handleAvatarModalOpen(rowData: User | User[]) {
    setRowUser(rowData);
    setAvatarModal(true);
  }

  function handleEditModalClose() {
    setEditModal(false);
    window.location.reload();
  }

  function handleEditModalOpen(rowData: User | User[]) {
    setRowUser(rowData);
    setEditModal(true);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const token = localStorage.getItem("Authorization");
      setLoading(false);
      api
        .get("/list", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
          toast.success("Usuários carregados com sucesso!");
        })
        .catch(() => toast.error("Erro ao carregar Usuários!"));
    }, 1000);

    const token = localStorage.getItem("Authorization");

    if (!token) {
      window.location.reload();
    }
  }, []);

  return (
    <div className="TablePage">
      <Sidebar />
      {addModal && (
        <AddModal onRequestClose={handleCloseAddModal} isOpen={addModal} />
      )}
      {avatarModal && (
        <AvatarModal
          onRequestClose={handleAvatarModalClose}
          isOpen={avatarModal}
        />
      )}
      {editModal && (
        <EditModal onRequestClose={handleEditModalClose} isOpen={editModal} />
      )}
      {loading ? (
        <RingLoader size={80} color={"#2E2E2E"} loading={loading} />
      ) : (
        <div className="tableData">
          <div className="Table">
            <MaterialTable
              title="Users"
              style={{
                borderRadius: "5px",
                backgroundColor: "#fff",
                color: "#000",
                width: "98%",
                zIndex: 1,
              }}
              columns={[
                {
                  title: "Avatar",
                  field: "avatar",
                  render: (data) =>
                    data.avatar ? ( // eslint-disable-next-line jsx-a11y/alt-text
                      <img
                        style={{ height: 56, width: 62, borderRadius: "50%" }}
                        src={require(`../../../../backend/tmp/avatar/${data.avatar}`)}
                      />
                    ) : null,
                },
                { title: "Nome", field: "name" },
                { title: "E-mail", field: "email" },
                { title: "CPF", field: "cpf" },
              ]}
              data={data}
              actions={[
                {
                  icon: "delete",
                  tooltip: "Excluir Usuário",
                  onClick: (event, rowData) => handleDeleteUser(rowData),
                },
                {
                  icon: "edit",
                  tooltip: "Editar Usuário",
                  onClick: (event, rowData) => handleEditModalOpen(rowData),
                },
                {
                  icon: "add",
                  tooltip: "Adicionar Usuário",
                  isFreeAction: true,
                  onClick: (event, rowData) => handleOpenAddModal(),
                },
                {
                  icon: () => <AccountCircleIcon />,
                  tooltip: "Adicionar Avatar",
                  onClick: (event, rowData) => handleAvatarModalOpen(rowData),
                },
              ]}
              options={{
                rowStyle: {
                  backgroundColor: "#fff",
                  color: "#000",
                },
                headerStyle: {
                  backgroundColor: "#B1B1B1",
                  zIndex: 1,
                },
                paging: true,
                pageSizeOptions: [5],
                actionsColumnIndex: -1,
              }}
            />
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
