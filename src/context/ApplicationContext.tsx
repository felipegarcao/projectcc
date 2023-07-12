import { ReactNode, createContext, useState } from "react";

interface ApplicationContextProviderPops {
  children: ReactNode;
}

interface ApplicationContextProps {
  collapsed: boolean;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
  toogle: () => void;
}

export const ApplicationContext = createContext({} as ApplicationContextProps);

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderPops) {
  const [collapsed, setCollapsed] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const toogle = () => {
    setCollapsed(old => !old)
  }
  
  return (
    <ApplicationContext.Provider
      value={{
        toogle,
        collapsed,
        modalIsOpen,
        setModalIsOpen
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
