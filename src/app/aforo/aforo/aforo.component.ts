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
  constructor(private aforoService:AforoService) { 
    this.getAforo();
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
}
