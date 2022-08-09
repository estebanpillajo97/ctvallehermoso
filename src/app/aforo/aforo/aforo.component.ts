import { Component, OnInit } from '@angular/core';
import { AforoService } from 'src/app/services/aforo.service';
@Component({
  selector: 'app-aforo',
  templateUrl: './aforo.component.html',
  styleUrls: ['./aforo.component.css']
})
export class AforoComponent implements OnInit {
  API_ENDPOINT='http://localhost/apirestvh/public/api';
  aforo:any;
  salones:any;
  constructor(private aforoService:AforoService) { 
    this.getAforo();
    this.getSalones();
  }

  ngOnInit(): void {
  }

  getAforo(){
    this.aforoService.get().subscribe((data:any)=>{
      this.aforo=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getSalones(){
    this.aforoService.getSalones().subscribe((data:any)=>{
      this.salones=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    })
  }
  inactivarSalones(id:any){
    this.aforoService.inactivarSalones(id).subscribe((data)=>{
      this.getSalones();
    },error=>{
      console.log(error);
    });
  }
  activarSalones(id:any){
    this.aforoService.activarSalones(id).subscribe((data)=>{
      this.getSalones();
    },error=>{
      console.log(error);
    });
  }
  //routerLink="/editar_salones/{{salones.af_id}}"
}
