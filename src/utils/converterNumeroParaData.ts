import moment from 'moment'
import 'moment/locale/pt-br'


// Função para converter número para data usando Moment.js
export function converterNumeroParaData(numeroDoMes: number) {
  // Verifica se o número está dentro do intervalo válido para meses (1 a 12)
  if (numeroDoMes >= 1 && numeroDoMes <= 12) {
    // Criando uma data usando Moment.js, assumindo que o ano é o ano atual
    const nomeDoMes = moment().month(numeroDoMes - 1).format('MMMM');
    return nomeDoMes;
  } else {
    return 'Número de mês inválido. Insira um número de 1 a 12.';
  }
}