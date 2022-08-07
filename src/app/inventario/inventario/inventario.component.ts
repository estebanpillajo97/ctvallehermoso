import { Component, OnInit } from '@angular/core';
import { EventoClienteService } from 'src/app/services/evento-cliente.service';
import { SubmenusService } from 'src/app/services/submenus.service';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  submenus:any;
  constructor(private eventoClienteService:EventoClienteService,
    private submenusService:SubmenusService) { 

  }

  ngOnInit(): void {
    this.getEventoCliente();
  }

  getEventoCliente(){
    this.submenusService.getListadoCompleto().subscribe(data =>{
      this.submenus = data;
    }, error=> {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
