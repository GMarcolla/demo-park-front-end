import { Component, OnInit } from '@angular/core';
import { Estacionamento } from 'src/app/interfaces/Estacionamento';
import { EstacionamentoService } from 'src/app/services/estacionamento.service';

@Component({
  selector: 'app-client-parkings',
  templateUrl: './client-parkings.component.html',
  styleUrls: ['./client-parkings.component.css'],
})
export class ClientParkingsComponent implements OnInit {
  parkingList: Estacionamento[] = [];
  displayedColumns: string[] = [
    'recibo',
    'clienteCpf',
    'dataEntrada',
    'dataSaida',
  ];
  data: any;
  constructor(private estacionamentoService: EstacionamentoService) {}

  ngOnInit(): void {
    this.estacionamentoService.getEstacionamentos().subscribe({
      next: (response) => {
        this.parkingList = response.content;
      },
      error: (e) => console.log(e),
    });
  }
}
