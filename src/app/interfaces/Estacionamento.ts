export interface Estacionamento {
  dataEntrada: Date;
  recibo: string;
  dataSaida: Date;
  desconto: number;
  valor: number;
  placa: string;
  marca: string;
  cor: string;
  modelo: string;
  clienteCpf: string;
  vagaCodigo: string;
}
