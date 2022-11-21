import { createContext, useEffect, useState } from "react";
import { makeMaster, getMaster } from "../services/main";

export const MasterContext = createContext({
  loading: false,
  setLoading: (status) => {},
  initial: "",
  name: "",
  updateMaster: (initial, name) => {},
});

function MasterContextProvider({ children }) {
  const [master, setMaster] = useState({ initial: "", name: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCurrentMaster() {
      setLoading(true);
      const data = await getMaster();
      const fullName = `${data.firstName} ${data.lastName}`;
      setMaster({ initial: data.initial, name: fullName });
      setLoading(false);
    }

    getCurrentMaster();
  }, []);

  const updateMaster = async (id, initial, name) => {
    setLoading(true);
    const data = await makeMaster(id);

    if (data.status == "success") {
      setMaster({ initial: initial, name: name });
    }
    setLoading(false);
  };

  const loadingHandler = (loadingStatus) => {
    setLoading(loadingStatus);
  };

  const value = {
    loading: loading,
    setLoading: loadingHandler,
    initial: master.initial,
    name: master.name,
    updateMaster: updateMaster,
  };

  return (
    <MasterContext.Provider value={value}>{children}</MasterContext.Provider>
  );
}

export default MasterContextProvider;
