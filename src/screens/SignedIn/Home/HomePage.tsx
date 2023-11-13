import { ImoveisDisponiveis } from "../Imoveis/Disponiveis";
import { TimeLine } from "../../../components/TimeLine";
import { useEffect, useState } from "react";
import { quantidadesCounts } from "../../../services/resources";
import { Spinner } from "../../../components/Spinner";
import { houseDisponiveis } from "../../../services/resources/properties";
import { CasasDisponiveisProps } from "../Imoveis/Disponiveis/types";
import { toast } from "react-toastify";
import { useUser } from "../../../hooks/useUser";
import * as Input from "../../../components/Input";
import { ButtonItem } from "./components/Button";
import * as Tabs from "@radix-ui/react-tabs";

export function HomePage() {
  const [countContratos, setCountContratos] = useState(0);
  const [countInquilinos, setCountInquilinos] = useState(0);
  const [countAlugadas, setCountAlugadas] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingCasa, setLoadingCasa] = useState(false);
  const [houses, setHouses] = useState<CasasDisponiveisProps[]>([]);

  const [currentTabBanheiro, setCurrentTabBanheiro] = useState("0");
  const [currentTabQuartos, setCurrentTabQuartos] = useState("0");
  const [currentTabVagas, setCurrentTabVagas] = useState("0");

  const { user } = useUser();

  useEffect(() => {
    if (user?.is_admin === 1) {
      carregarQuantidade();
    }
    carregarCasasDisponiveis();
  }, [currentTabBanheiro, currentTabQuartos, currentTabVagas]);

  async function carregarQuantidade() {
    setLoading(true);
    try {
      await quantidadesCounts().then((count) => {
        setCountContratos(count.contratos);
        setCountInquilinos(count.inquilinos);
        setCountAlugadas(count.casas);
      });
    } catch (err) {
    } finally {
      setLoading(false);
    }
  }

  async function carregarCasasDisponiveis() {
    setLoadingCasa(true);
    try {
      await houseDisponiveis({
        banheiro: currentTabBanheiro,
        dormitorios: currentTabQuartos,
        vagas_garagem: currentTabVagas
      }).then((x) => setHouses(x.houses));
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoadingCasa(false);
    }
  }

  return (
    <>
      {user?.is_admin === 1 && <TimeLine />}

      {user?.is_admin === 1 && (
        <div className="lg:grid lg:grid-cols-3 gap-3 flex flex-col justify-center items-center mt-4">
          <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-full ">
            <div className="flex items-center justify-center flex-col">
              {loading ? (
                <Spinner />
              ) : (
                <h2 className="text-gray-800 text-3xl font-semibold">
                  {countContratos}
                </h2>
              )}
              <p className="mt-2 text-gray-600 text-center">
                Contratos Gerados
              </p>
            </div>
          </div>

          <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-full ">
            <div className="flex items-center justify-center flex-col">
              {loading ? (
                <Spinner />
              ) : (
                <h2 className="text-gray-800 text-3xl font-semibold">
                  {countInquilinos}
                </h2>
              )}

              <p className="mt-2 text-gray-600 text-center">Inquilinos</p>
            </div>
          </div>

          <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg w-full ">
            <div className="flex items-center justify-center flex-col">
              {loading ? (
                <Spinner />
              ) : (
                <h2 className="text-gray-800 text-3xl font-semibold">
                  {countAlugadas}
                </h2>
              )}
              <p className="mt-2 text-gray-600 text-center">Casas Alugadas</p>
            </div>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-medium text-zinc-900 mt-10">
        Casas Disponíveis
      </h1>

     
         <div className="p-4 border rounded-md mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
         <div>
           <span className="text-gray-500 text-sm">Banheiros</span>
 
           <Tabs.Root
             value={currentTabBanheiro}
             onValueChange={setCurrentTabBanheiro}
           >
             <Tabs.List>
               <ButtonItem
                 title="1"
                 value="1"
                 isSelected={currentTabBanheiro === "1"}
               />
 
               <ButtonItem
                 title="2"
                 value="2"
                 isSelected={currentTabBanheiro === "2"}
               />
 
               <ButtonItem
                 title="3"
                 value="3"
                 isSelected={currentTabBanheiro === "3"}
               />
 
               <ButtonItem
                 title="4"
                 value="4"
                 isSelected={currentTabBanheiro === "4"}
               />
             </Tabs.List>
           </Tabs.Root>
         </div>
 
         <div>
           <span className="text-gray-500 text-sm">Quartos</span>
 
           <Tabs.Root
             value={currentTabQuartos}
             onValueChange={setCurrentTabQuartos}
           >
             <Tabs.List>
               <ButtonItem
                 title="1"
                 value="1"
                 isSelected={currentTabQuartos === "1"}
               />
 
               <ButtonItem
                 title="2"
                 value="2"
                 isSelected={currentTabQuartos === "2"}
               />
 
               <ButtonItem
                 title="3"
                 value="3"
                 isSelected={currentTabQuartos === "3"}
               />
 
               <ButtonItem
                 title="4"
                 value="4"
                 isSelected={currentTabQuartos === "4"}
               />
             </Tabs.List>
           </Tabs.Root>
         </div>
 
         <div>
           <span className="text-gray-500 text-sm">Vagas na garagem</span>
 
           <Tabs.Root value={currentTabVagas} onValueChange={setCurrentTabVagas}>
             <Tabs.List>
               <ButtonItem
                 title="1"
                 value="1"
                 isSelected={currentTabVagas === "1"}
               />
 
               <ButtonItem
                 title="2"
                 value="2"
                 isSelected={currentTabVagas === "2"}
               />
 
               <ButtonItem
                 title="3"
                 value="3"
                 isSelected={currentTabVagas === "3"}
               />
 
               <ButtonItem
                 title="4"
                 value="4"
                 isSelected={currentTabVagas === "4"}
               />
             </Tabs.List>
           </Tabs.Root>
         </div>
 
         <div className="mt-2">
           <span className="text-gray-500 text-sm">Total a Pagar</span>
           <div className="flex items-center gap-3">
             <Input.Root>
               <Input.Control placeholder="R$ 00,00" />
             </Input.Root>
 
             <button
               type="submit"
               className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
             >
               Consultar
             </button>
           </div>
         </div>
       </div>
 
    

     
      {loadingCasa ? (
        <Spinner />
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-3">
          {houses.map((item, index) => (
            <ImoveisDisponiveis key={index} {...item} />
          ))}
        </div>
      )}
    </>
  );
}
