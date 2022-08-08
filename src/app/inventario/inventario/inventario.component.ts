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
  sm_id:any;
  ec_fechaDesde:any;
  ec_fechaHasta:any;
  Inventario:Boolean=false;
  inventarioSubmenuAdulto:any;
  inventarioSubmenuNinio:any;
  constructor(private eventoClienteService:EventoClienteService,
    private submenusService:SubmenusService) { 

  }

  ngOnInit(): void {
    this.getEventoCliente();
  }

  public mostrarTablaSubmenu(){
    if(this.sm_id=="" && this.ec_fechaDesde=="" && this.ec_fechaHasta==""){
      this.Inventario=false;
    }else{
      this.Inventario=true;
      this.eventoClienteService.inventarioSubmenuAdulto(this.sm_id,this.ec_fechaDesde,this.ec_fechaHasta).subscribe((data)=>{
        this.inventarioSubmenuAdulto = data;
        console.log(this.inventarioSubmenuAdulto);
      }, error =>{
        console.log(error);
        alert('Ocurrió un error');
      });
      this.eventoClienteService.inventarioSubmenuNinio(this.sm_id,this.ec_fechaDesde,this.ec_fechaHasta).subscribe((data)=>{
        this.inventarioSubmenuNinio = data;
        console.log(this.inventarioSubmenuNinio);
      }, error =>{
        console.log(error);
        alert('Ocurrió un error');
      })
    }
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
