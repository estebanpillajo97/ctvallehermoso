import { Component, OnInit } from '@angular/core';
import { EventoClienteService } from 'src/app/services/evento-cliente.service';
//pdf
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
//xlsx
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-evento-cliente',
  templateUrl: './evento-cliente.component.html',
  styleUrls: ['./evento-cliente.component.css']
})
export class EventoClienteComponent implements OnInit {
  reserva: any = [];
  eventoCliente: any;
  eventoClienteFiltrado: any;
  p: any = 1;
  //esta es la variable de validación
  public validador: any;
  cedula: any;
  fileName = 'eventoCliente.xlsx';

  ec_fechaDesde:any;
  ec_fechaHasta:any;
  constructor(private EventoClienteService: EventoClienteService) {
    this.getEventoCliente();
  }

  ngOnInit(): void {
  }

  getEventoCliente() {
    this.EventoClienteService.get().subscribe((data: any) => {
      this.eventoCliente = data;
      console.log(this.eventoCliente);
    }, error => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  public validadorDeCedula(cedula: any) {
    let cedulaCorrecta = false;
    if (cedula.length == 10) {
      let tercerDigito = parseInt(cedula.substring(2, 3));
      if (tercerDigito < 6) {
        // El ultimo digito se lo considera dígito verificador
        let coefValCedula = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        let verificador = parseInt(cedula.substring(9, 10));
        let suma: number = 0;
        let digito: number = 0;
        for (let i = 0; i < (cedula.length - 1); i++) {
          digito = parseInt(cedula.substring(i, i + 1)) * coefValCedula[i];
          suma += ((parseInt((digito % 10) + '') + (parseInt((digito / 10) + ''))));
          //console.log(suma+" suma"+coefValC;                                                                                                              edula[i]); 
        }
        suma = Math.round(suma);
        //console.log(verificador);
        //console.log(suma);
        //console.log(digito);
        if ((Math.round(suma % 10) == 0) && (Math.round(suma % 10) == verificador)) {
          cedulaCorrecta = true;
        } else if ((10 - (Math.round(suma % 10))) == verificador) {
          cedulaCorrecta = true;
          console.log(verificador);
        } else {
          cedulaCorrecta = false;
        }
      } else {
        cedulaCorrecta = false;
      }
    } else {
      cedulaCorrecta = false;
    }
    this.validador = cedulaCorrecta;
  }

  inactivarEventoCliente(id: any) {
    this.EventoClienteService.inactivarEventoCliente(id).subscribe((data) => {
      this.getEventoCliente();
    }, error => {
      console.log(error);
    });
  }

  activarEventoCliente(id: any) {
    this.EventoClienteService.activarEventoCliente(id).subscribe((data) => {
      this.getEventoCliente();
    }, error => {
      console.log(error);
    });
  }

  filtrarFechas() {
    if(this.ec_fechaDesde=="" && this.ec_fechaHasta==""){
      this.getEventoCliente();
    }else{
      this.EventoClienteService.filtrarFechas(this.ec_fechaDesde,this.ec_fechaHasta).subscribe(data => {
        this.eventoCliente = data;
        console.log(this.eventoCliente);
      }, error => {
        console.log(error);
        alert('Ocurrió un error');
      });
    }

  }

  eventosActivos() {
    this.EventoClienteService.eventosActivos().subscribe(data => {
      this.eventoCliente = data;
      console.log(this.eventoCliente);
    })

  }
  eventosInactivos() {
    this.EventoClienteService.eventosInactivos().subscribe(data => {
      this.eventoCliente = data;
      console.log(this.eventoCliente);
    })
  }
  eventosTodos() {
    this.EventoClienteService.get().subscribe(data => {
      this.eventoCliente = data;
      console.log(this.eventoCliente);
    })
  }
  public convertToPDF() {
    let DATA: any = document.getElementById('contentToConvert');

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
  public convertToXLSX() {
    let element = document.getElementById('contentToConvert');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hoja');

    XLSX.writeFile(wb, this.fileName);
  }
}
