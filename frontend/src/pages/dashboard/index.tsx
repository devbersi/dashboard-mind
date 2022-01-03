import { useEffect, useState } from "react";
import { Table } from "../tableUser";
import { NotAdministrator } from "../commomUser";
import { AuthContext } from "../../Contexts/AuthContext";

export const Home = () => {
  const administrator = localStorage.getItem("admin");
  const [admin, setAdmin] = useState<boolean>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (administrator === "true") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  return <>{admin ? <Table /> : <NotAdministrator />}</>;
};
