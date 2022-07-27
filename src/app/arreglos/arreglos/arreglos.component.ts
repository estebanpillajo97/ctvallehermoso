import { Component, OnInit } from '@angular/core';
import { ArreglosService } from 'src/app/services/arreglos.service';
@Component({
  selector: 'app-arreglos',
  templateUrl: './arreglos.component.html',
  styleUrls: ['./arreglos.component.css']
})
export class ArreglosComponent implements OnInit {

  API_ENDPOINT='http://localhost/apirestvh/public/api';
  arreglos:any;
  p: any = 1;
  constructor(private arreglosService: ArreglosService) { 
    this.getArreglos();
  }

  ngOnInit(): void {
  }

  getArreglos(){
    this.arreglosService.get().subscribe((data:any)=>{
      this.arreglos=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  inactivarArreglos(id:any){
    this.arreglosService.inactivarArreglos(id).subscribe((data)=>{
      this.getArreglos();
    },error=>{
      console.log(error);
    });
  }

  activarArreglos(id:any){
    this.arreglosService.activarArreglos(id).subscribe((data)=>{
      this.getArreglos();
    },error=>{
      console.log(error);
    });
  }
}
