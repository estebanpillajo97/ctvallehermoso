import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
//pdf
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

  public convertToPDF(){
    let DATA:any = document.getElementById('contentToConvert');
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('tipos_reservaciones.pdf');
    });
  }
}


