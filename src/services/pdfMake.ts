import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { Tenants } from "../@types/tenants";
import { DetailsHouse } from "../@types/Imoveis";
import { handleSubmittedTypes } from "../screens/SignedIn/Contrato/types";
import { api } from "./api";
import { createContrato } from "./resources/contrato";
import moment from "moment";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

interface generatePdfProps {
  inquilino: Tenants;
  imovel: DetailsHouse;
  contrato: handleSubmittedTypes;
  admin_id: any
}

export async function generatePdf({
  inquilino,
  imovel,
  contrato,
  admin_id
}: generatePdfProps) {
  const currencyFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  var dd = {
    content: [
      {
        text: "CONTRATO DE ALUGUEL RESIDENCIAL",
        style: "header",
      },
      `Entre Contrato de aluguel Residencial é celebrado neste dia ${contrato.data_vigencia}, entre:\n\n`,
      {
        text: "Locador:",
        style: "subheader",
      },
      "Nome: Luis Felipe Garção Silva",
      "Endereço: Maria do Espirito Santo - 59",
      "Telefone: (18) 99794-3842",
      "Email: felipe-mara2003@hotmail.com\n\n",
      {
        text: "Locatário:",
        style: "subheader",
      },
      `Nome: ${inquilino.name}`,
      `Endereço: ${imovel.rua} - ${imovel.numero}`,
      `Telefone: (18) 99794-3842`,
      `Email: ${inquilino.email}\n\n`,
      {
        text: "1. Descrição do Imóvel",
        style: "defaultTextBold",
      },
      {
        text: "O Locador concorda em alugar ao Locatário o seguinte imóvel residencial:",
        style: "defaultText",
      },
      {
        text: `Endereço: ${imovel.rua} - ${imovel.numero}`,
      },
      {
        text: "Descrição: Vazamento\n\n",
      },

      // 2 - Prazo do Contrato

      {
        text: "2. Prazo do Contrato",
        style: "defaultTextBold",
      },
      {
        text: `O período de locação terá início em ${moment(contrato.data_vigencia).format('DD/MM/YYYY')} e terá uma duração de ${contrato.duracao_meses} meses, encerrando-se em ${contrato.data_vencimento}.\n\n`,
        style: "defaultText",
      },

      //3. Valor do Aluguel,

      {
        text: "3. Valor do Aluguel",
        style: "defaultTextBold",
      },
      {
        text: `O valor do aluguel mensal será de R$ ${contrato.valor_aluguel},00. Devido até o dia ${contrato.data_vencimento} de cada mês. O pagamento será efetuado pelo Locatário ao Locador através de depósito bancário, Pix e outros.\n\n`,
        style: "defaultText",
      },

      // 4. Depósito de Segurança

      {
        text: "4. Depósito de Segurança",
        style: "defaultTextBold",
      },
      {
        text: `O Locatário concorda em fornecer um depósito de segurança no valor de R$ 200,00 no momento da assinatura deste contrato. Esse depósito será mantido pelo Locador como garantia contra danos ao imóvel ou inadimplência no pagamento do aluguel.\n\n`,
        style: "defaultText",
      },

      // 5. Utilidades e Despesas

      {
        text: "5. Utilidades e Despesas",
        style: "defaultTextBold",
      },
      {
        text: "As despesas de utilidades, como água, eletricidade, gás, e outras contas, serão de responsabilidade do Locatário, a menos que especificado de outra forma neste contrato.\n\n",
        style: "defaultText",
      },

      // 6. Manutenção do Imovel

      {
        text: "6. Manutenção do Imovel",
        style: "defaultTextBold",
      },
      {
        text: "O Locatário concorda em manter o imóvel em boas condições, realizando pequenos reparos conforme necessário. O Locador será responsável por reparos maiores.\n\n",
        style: "defaultText",
      },

      // 7. Rescisão do Contrato

      {
        text: "7. Rescisão do Contrato",
        style: "defaultTextBold",
      },
      {
        text: "Caso o Locatário deseje encerrar este contrato antes do prazo acordado, ele deverá notificar o Locador com pelo menos 15 dias de antecedência. O Locador pode rescindir o contrato mediante aviso prévio de 10 dias.\n\n",
        style: "defaultText",
      },

      // 8. Disposições Gerais

      {
        text: "8. Disposições Gerais",
        style: "defaultTextBold",
      },
      {
        ul: [
          "Animais de estimação: Permitido",
        ],
      },
      {
        text: `As partes concordam com os termos e condições deste Contrato de Aluguel Residencial e assinam este documento neste dia ${moment(contrato.data_vigencia).format('DD/MM/YYYY')} .\n\n`,
      },

      {
        text: "Locador:",
        style: "subheader",
      },
      {
        text: "Assinatura:___________________________________________________________________________________\n\n",
      },

      {
        text: "Locatário:",
        style: "subheader",
      },
      {
        text: "Assinatura:___________________________________________________________________________________\n\n",
      },

      {
        text: "Lembre-se de que este é apenas um exemplo fictício e genérico. Recomenda-se fortemente que um advogado revise e adapte o contrato de acordo com as leis e regulamentos locais e as circunstâncias específicas.",
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 15,
        bold: true,
      },
      quote: {
        italics: true,
      },
      small: {
        fontSize: 8,
      },
      defaultTextBold: {
        fontSize: 12,
        bold: true,
      },
      defaultText: {
        fontSize: 12,
   
      },
      
    },

  };

  let base64;

  pdfMake.createPdf(dd).getBase64(async (data) => {
    base64 = `data:application/pdf;base64, ${data}`;

  
      await createContrato({
        casa_id: imovel.id,
        user_id: inquilino.id,
        data_vencimento: contrato.data_vencimento,
        data_vigencia: contrato.data_vigencia,
        duracao_meses: contrato.duracao_meses,
        finalidade: contrato.finalidade,
        juros_atraso: contrato.juros_atraso,
        observacao: contrato.observacao,
        uri_contrato: base64,
        valor_aluguel: contrato.valor_aluguel,
        admin_id
      })
  });

  pdfMake.createPdf(dd).open()



}
