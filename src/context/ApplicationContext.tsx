import { ReactNode, createContext, useState } from "react";

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
}

export const applicationContext = createContext({} as ApplicationContextProps);

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderPops) {
  const [collapsed, setCollapsed] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("tab1");
  const [newRequest, setNewRequest] = useState(0)

  const toogle = () => {
    setCollapsed(old => !old)
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
        setNewRequest
      }}
    >
      {children}
    </applicationContext.Provider>
  );
}
