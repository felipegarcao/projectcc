import { ReactNode, createContext, useState } from "react";

interface ApplicationContextProviderPops {
  children: ReactNode;
}

interface ApplicationContextProps {
  collapsed: boolean;
  toogle: () => void;
}

export const ApplicationContext = createContext({} as ApplicationContextProps);

export function ApplicationContextProvider({
  children,
}: ApplicationContextProviderPops) {
  const [collapsed, setCollapsed] = useState(true);


  const toogle = () => {
    setCollapsed(old => !old)
  }
  
  return (
    <ApplicationContext.Provider
      value={{
        toogle,
        collapsed
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
