import { Component, OnInit } from '@angular/core';
import { EventoClienteService } from 'src/app/services/evento-cliente.service';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  submenus:any;
  constructor(private eventoClienteService:EventoClienteService) { 

  }

  ngOnInit(): void {
    this.getEventoCliente();
  }

  getEventoCliente(){
    this.eventoClienteService.get().subscribe(data =>{
      this.submenus = data;
    }, error=> {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
