import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/Ciclos';
import { CicloService } from 'src/app/services/ciclo.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  ciclo: Ciclo = new Ciclo();

  constructor(private service: CicloService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    console.log(this.ciclo.data);
    // this.ciclo = new Ciclo();
    // this.ciclo.data = new Date("2025/03/01");
    this.service.cadastrar(this.ciclo).subscribe((ciclo) => {
      console.log(ciclo)
    })
  }

}
