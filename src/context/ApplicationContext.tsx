import { ReactNode, createContext, useEffect, useState } from "react";
import { Tenants } from "../@types/tenants";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ApplicationContextProviderPops {
  children: ReactNode;
}

interface ApplicationContextProps {
  collapsed: boolean;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  toogle: () => void;
  currentTab: string;
  setCurrentTab: (value: string) => void;
  newRequest: number;
  setNewRequest: (value: number) => void;
  logout: () => void;
  login: (values: any) => Promise<void>;
  user: Tenants | undefined;
  rehydrateLoading: boolean;
}

export const applicationContext = createContext({} as ApplicationContextProps);

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderPops) {
  const [collapsed, setCollapsed] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("tab1");
  const [newRequest, setNewRequest] = useState(0);
  const [user, setUser] = useState<Tenants>();
  const [rehydrateLoading, setRehydrateLoading] = useState(true);


  const navigate = useNavigate();

  const toogle = () => {
    setCollapsed((old) => !old);
  };

  const login = async (data: any) => {
    await api
      .post("/user/login", { ...data })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setRehydrateLoading(!rehydrateLoading)
      })
      .catch((error) => {
        toast.error(error.message);
      });

  
  };

  const logout = () => {
    setUser(undefined);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    loadUserStorage();
  }, [rehydrateLoading]);

  async function loadUserStorage() {
    
    const userDataFromLocalStorage = localStorage.getItem("user");

    const userParsed: Tenants | null = userDataFromLocalStorage ? JSON.parse(userDataFromLocalStorage) : null;
    
    if (userParsed) {
      setUser(userParsed);
    }
  }

  return (
    <applicationContext.Provider
      value={{
        toogle,
        collapsed,
        modalIsOpen,
        setModalIsOpen,
        setCurrentTab,
        currentTab,
        newRequest,
        setNewRequest,
        logout,
        login,
        user,
        rehydrateLoading
      }}
    >
      {children}
    </applicationContext.Provider>
  );
}
