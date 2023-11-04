import { useEffect, useState } from "react";
import { Avatar } from "../../../../components/Avatar";

interface MonthData {
  month: number;
  status: string;
}

interface YearData {
  year: number;
  months: MonthData[];
}

export function Historico() {
  const [paymentData, setPaymentData] = useState<YearData[]>([]);

  const generateMonths = (): MonthData[] => {
    const months: MonthData[] = [];
    for (let i = 0; i < 12; i++) {
      months.push({
        month: i + 1,
        status: "pendente", // Definindo inicialmente como "pendente"
      });
    }
    return months;
  };

  useEffect(() => {
    const generatePaymentHistory = (): void => {
      const currentYear = new Date().getFullYear();
      const years: YearData[] = [];
      for (let i = 0; i < 2; i++) {
        const year = currentYear - i;
        const months = generateMonths();
        years.push({ year, months });
      }
      setPaymentData(years);
    };

    generatePaymentHistory();
  }, []);

  const handlePayment = (
    yearIndex: number,
    monthIndex: number,
    status: string
  ): void => {
    const updatedPaymentData = [...paymentData];
    updatedPaymentData[yearIndex].months[monthIndex].status = status;
    setPaymentData(updatedPaymentData);
  };

  return (
    <>
      <div className="shadow-md rounded-md">
        <div className="grid md:grid-cols-[200px_1fr] grid-cols-1">
          <div className="flex flex-col justify-center items-center gap-4 border-r border-gray-200 p-6">
            <Avatar />
            <h2 className="text-gray-600 font-medium">Luis Felipe</h2>
            <span className="text-sm text-gray-400">Developer Web</span>
            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 hidden md:block">
              Voltar
            </button>
          </div>
          <div className="p-6">
            <div>
              <span className="text-gray-500 text-lg">
                Informações Pessoais
              </span>

              <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-3  gap-2 sm:gap-0">
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Email</strong>
                  <span className="text-sm text-gray-400">
                    felipe-mara2003@hotmail.com
                  </span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">Telefone:</strong>
                  <span className="text-sm text-gray-400">(18) 99794-3842</span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-gray-500 text-sm">
                    Estado Civil:
                  </strong>
                  <span className="text-sm text-gray-400">Solteiro</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-3 gap-2 sm:gap-0">
              <div className="flex flex-col">
                <strong className="text-gray-500 text-sm">CPF:</strong>
                <span className="text-sm text-gray-400">733.422.800-69</span>
              </div>
              <div className="flex flex-col">
                <strong className="text-gray-500 text-sm">RG:</strong>
                <span className="text-sm text-gray-400">10.030.913-6</span>
              </div>
            </div>

            <div className="mt-4">
              <span className="text-gray-500 text-lg">Observação:</span>
              <p className="text-sm text-gray-400">dsadadsadadadsacase1</p>
            </div>

            <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 block md:hidden mt-3 w-full">
              Voltar
            </button>
          </div>
        </div>
      </div>

      <h2 className="my-10 text-2xl  text-violet-600">Histórico</h2>

      <div>
        {paymentData.map((yearData) => (
          <div key={yearData.year}>
            <h2 className="my-5 text-2xl  text-violet-600">{yearData.year}</h2>
            {yearData.months.map((month, monthIndex) => (
              <div className="flex justify-between shadow-md p-4 rounded-lg">
                <span>Month: {month.month}</span>
                <select
                  value={month.status}
                  onChange={(e) =>
                    handlePayment(
                      paymentData.indexOf(yearData),
                      monthIndex,
                      e.target.value
                    )
                  }
                >
                  <option value="pendente">Pendente</option>
                  <option value="pago">Pago</option>
                  <option value="atrasado">Atrasado</option>
                  <option value="pago parceladamente">
                    Pago Parceladamente
                  </option>
                </select>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
