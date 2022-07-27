import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  API_ENDPOINT='http://localhost/apirestvh/public/api';
  reservaciones:any;

  constructor(private reservacionesService: ReservacionesService) { 
    this.getReservaciones();
  }

  ngOnInit(): void {
  }

  getReservaciones(){
    this.reservacionesService.get().subscribe((data:any)=>{
      this.reservaciones=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  inactivarReservacion(id:any){
    this.reservacionesService.inactivarReservacion(id).subscribe((data)=>{
      this.getReservaciones();
    },error=>{
      console.log(error);
    });
  }

  activarReservacion(id:any){
    this.reservacionesService.activarReservacion(id).subscribe((data)=>{
      this.getReservaciones();
    },error=>{
      console.log(error);
    });
  }

}
