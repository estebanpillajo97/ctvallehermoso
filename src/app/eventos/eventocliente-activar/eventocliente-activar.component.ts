import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArreglosService } from 'src/app/services/arreglos.service';
import { EventosService } from 'src/app/services/eventos.service';
import { EventoClienteService } from 'src/app/services/evento-cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AforoService } from 'src/app/services/aforo.service';
@Component({
  selector: 'app-eventocliente-activar',
  templateUrl: './eventocliente-activar.component.html',
  styleUrls: ['./eventocliente-activar.component.css']
})
export class EventoclienteActivarComponent implements OnInit {

  elID: any;
  eventos: any;
  arreglos: any;
  numAdultos: any;
  numNinios: any;
  tipocedula: any;
  salon:any;
  formularioEvento: FormGroup;
  constructor(
    private arreglosService: ArreglosService,
    private eventosService: EventosService,
    private EventoClienteService: EventoClienteService,
    private salonService:AforoService,
    private ActivatedRoute: ActivatedRoute,
    private formularioEve: FormBuilder,
    private toastr: ToastrService,
    private router: Router) {
    this.elID = this.ActivatedRoute.snapshot.paramMap.get('ec_id');
    this.EventoClienteService.obtenerEventoCliente(this.elID).subscribe((result: any) => {
      this.formularioEvento.setValue({
        ec_nombreCliente: result[0]['ec_nombreCliente'],
        ec_cedula: result[0]['ec_cedula'],
        ec_celular: result[0]['ec_celular'],
        eve_id: result[0]['eve_id'],
        arr_id: result[0]['arr_id'],
        ec_fecha: result[0]['ec_fecha'],
        ec_hora: result[0]['ec_hora'],
        na_id: result[0]['na_id'],
        nn_id: result[0]['nn_id'],
        sa_id: result[0]['sa_id'],
        ec_descripcion: result[0]['ec_descripcion'],
        ec_estado: result[0]['ec_estado'],
        tc_id: result[0]['tc_id']

      });
    });
    this.formularioEvento = this.formularioEve.group({
      ec_nombreCliente: [''],
      ec_cedula: [''],
      ec_celular: [''],
      eve_id: [''],
      arr_id: [''],
      ec_fecha: [''],
      ec_hora: [''],
      na_id: [''],
      nn_id: [''],
      sa_id: [''],
      ec_descripcion: [''],
      ec_estado: ['',Validators.required],
      tc_id: ['']
    });
  }

  ngOnInit(): void {
    this.getArreglos();
    this.getEventos();
    this.getNumAdultos();
    this.getNumNinios();
    this.getTipoCedula();
    this.getSalones();
  }

  getEventos() {
    this.eventosService.get().subscribe((res: any) => {
      this.eventos = res;
      console.log(this.eventos)
    })
  }

  getArreglos() {
    this.arreglosService.get().subscribe((res: any) => {
      this.arreglos = res;
      console.log(this.arreglos)
    })
  }
  getNumAdultos() {
    this.eventosService.getNumAdultos().subscribe((res: any) => {
      this.numAdultos = res;
      console.log(this.numAdultos)
    })
  }
  getNumNinios() {
    this.eventosService.getNumNinios().subscribe((res: any) => {
      this.numNinios = res;
      console.log(this.numNinios)
    })
  }
  getTipoCedula() {
    this.eventosService.getTipoCedula().subscribe((res: any) => {
      this.tipocedula = res;
      console.log(this.tipocedula);
    })
  }
  getSalones(){
    this.salonService.get().subscribe((res: any) => {
      this.salon = res;
      console.log(this.salon);
    })
  }

  modificarEventoCliente() {
    let formData = new FormData();
    formData.append('ec_nombreCliente', this.formularioEvento.value.ec_nombreCliente.toString());
    formData.append('ec_celular', this.formularioEvento.value.ec_celular.toString());
    formData.append('ec_cedula', this.formularioEvento.value.ec_cedula.toString());
    formData.append('eve_id', this.formularioEvento.value.eve_id.toString());
    formData.append('arr_id', this.formularioEvento.value.arr_id.toString());
    formData.append('ec_fecha', this.formularioEvento.value.ec_fecha.toString());
    formData.append('ec_hora', this.formularioEvento.value.ec_hora.toString());
    formData.append('na_id', this.formularioEvento.value.na_id.toString());
    formData.append('nn_id', this.formularioEvento.value.nn_id.toString());
    formData.append('sa_id', this.formularioEvento.value.sa_id.toString());
    formData.append('ec_descripcion', this.formularioEvento.value.ec_descripcion.toString());
    formData.append('ec_estado', this.formularioEvento.value.ec_estado.toString());
    formData.append('tc_id', this.formularioEvento.value.tc_id.toString());
    this.EventoClienteService.editarEventoCliente(this.elID, formData).subscribe(() => {
      this.toastr.success('Edición de información', 'Completa')
      this.router.navigateByUrl('eventos_cliente')
    });
  }
  getEC_Estado(ec_estado: string) {
    return this.formularioEvento.get(ec_estado);
  }
}
