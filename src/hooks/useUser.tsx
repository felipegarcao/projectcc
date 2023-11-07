import { useContext } from "react";
import { applicationContext } from "../context/ApplicationContext";

export function useUser(){
  const user = useContext(applicationContext);

  return user
}