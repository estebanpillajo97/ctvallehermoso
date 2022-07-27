import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';

//pdf
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  API_ENDPOINT='http://localhost/apirestvh/public/api';
  eventos:any;
  constructor(private eventosService: EventosService) { 
    this.getEventos();
  }

  ngOnInit(): void {
  }

  getEventos(){
    this.eventosService.get().subscribe((data:any)=>{
      this.eventos=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  inactivarEvento(id:any){
    this.eventosService.inactivarEvento(id).subscribe((data)=>{
      this.getEventos();
    },error=>{
      console.log(error);
    });
  }

  activarEvento(id:any){
    this.eventosService.activarEvento(id).subscribe((data)=>{
      this.getEventos();
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
        
        PDF.save('tipoEventos.pdf');
    });
  }

}
