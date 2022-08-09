import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from '../services/reservaciones.service';
import { MenusService } from '../services/menus.service';
import { ArreglosService } from '../services/arreglos.service';
import { EventosService } from '../services/eventos.service';
import { SubmenusService } from '../services/submenus.service';
import { ReservaClienteService } from '../services/reserva-cliente.service';
import { EventoClienteService } from '../services/evento-cliente.service';
import { TipoCedulaService } from '../services/tipo-cedula.service';
import { AforoService } from '../services/aforo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Directory: any = 'https://apirestvh.herokuapp.com/uploads/';

  reservacion: Boolean = true;
  evento: Boolean = false;

  formularioReserva: FormGroup;
  formularioEvento: FormGroup;
  reserva: any;
  menus: any;
  submenus: any;
  arreglos: any;
  eventos: any;
  tipo_cedula:any;
  aforo:any;
  numPersonasRes:any;
  numAdultos:any;
  numNinios:any;
  //para el filtro
  menuses: any;
  submenuses: any;
  public selectedMenusValue: any = {
    men_id: 0, men_nombre: '', men_foto: '', men_descripcion: '', men_estado: ''
  };
  el_ID: any;
  constructor(
    private reservacionService: ReservacionesService,
    private EventoClienteService: EventoClienteService,
    private menusService: MenusService,
    private arreglosService: ArreglosService,
    private eventosService: EventosService,
    public submenusService: SubmenusService,
    private ReservaClienteService: ReservaClienteService,
    private TipoCedulaService:TipoCedulaService,
    private aforoService:AforoService,
    private formularioRes: FormBuilder,
    private formularioEve: FormBuilder,
    private toastr: ToastrService
  ) {

    this.formularioReserva = this.formularioRes.group({
      rc_nombreCliente: ['', [Validators.required, Validators.maxLength(60), Validators.minLength(10)]],
      rc_cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      rc_celular: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(6)]],
      res_id: ['', [Validators.required]],
      rc_fecha: [(new Date()).toISOString().substring(0,10), [Validators.required]],
      rc_hora: ['', [Validators.required]],
      np_id: ['', [Validators.required]],
      rc_descripcion: ['', [Validators.minLength(5), Validators.maxLength(255)]],
      tc_id: ['', Validators.required]
    });
    this.formularioEvento = this.formularioEve.group({
      ec_nombreCliente: ['', [Validators.required, Validators.maxLength(60), Validators.minLength(10)]],
      ec_cedula: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(13)]],
      ec_celular: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(6)]],
      eve_id: ['', [Validators.required]],
      arr_id: ['', [Validators.required]],
      ec_fecha: [(new Date()).toISOString().substring(0,10), [Validators.required]],
      ec_hora: ['', [Validators.required]],
      na_id: ['', [Validators.required]],
      nn_id: ['', [Validators.required]],
      ec_descripcion: ['', [Validators.minLength(5), Validators.maxLength(255)]],
      sm_id: ['', [Validators.required]],
      tc_id:['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getReservas();
    this.getMenus();
    this.getArreglos();
    this.getEventos();
    this.getSubmenus();
    this.getTipoCedula();
    this.getNumPersonasRes();
    this.getNumAdultos();
    this.getNumNinios();
    this.menusService.get().subscribe((res: any) => {
      this.menus = res;
    });

    const c=Date.now;
    console.log(new Date().toISOString().substring(0,10));

  }

  getMenus() {
    this.menusService.get().subscribe(data => {
      this.menus = data;
      console.log(this.menus);
    }, error => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getReservas() {
    this.reservacionService.get().subscribe((res: any) => {
      this.reserva = res;
      console.log(this.reserva)
    })
  }
  getNumPersonasRes(){
    this.reservacionService.getNumPersonas().subscribe((data:any)=>{
      this.numPersonasRes = data;
      console.log(this.numPersonasRes);
    })
  }
  getNumAdultos(){
    this.eventosService.getNumAdultos().subscribe((data:any)=>{
      this.numAdultos = data;
      console.log(this.numAdultos);
    })
  }
  getNumNinios(){
    this.eventosService.getNumNinios().subscribe((data:any)=>{
      this.numNinios = data;
      console.log(this.numNinios);
    })
  }
  getArreglos() {
    this.arreglosService.get().subscribe((data: any) => {
      this.arreglos = data;
    }, error => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getEventos() {
    this.eventosService.get().subscribe((data: any) => {
      this.eventos = data;
    }, error => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getSubmenus() {
    this.submenusService.get().subscribe((data: any) => {
      this.submenus = data;
    }, error => {
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  getTipoCedula() {
    this.TipoCedulaService.get().subscribe((data: any)=>{
      this.tipo_cedula = data;
    }, error =>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  mostrarReserva() {

    if (this.reservacion == false) {
      this.reservacion = true;
      this.evento = false;
    }
  }
  mostrarEvento() {
    if (this.evento == false) {
      this.evento = true;
      this.reservacion = false;
    }
  }

  //Para agregar Reserva del Cliente
  AgregarReservaCliente() {
    let formData = new FormData();
    formData.append('rc_nombreCliente', this.formularioReserva.value.rc_nombreCliente.toString());
    formData.append('rc_celular', this.formularioReserva.value.rc_celular.toString());
    formData.append('rc_cedula', this.formularioReserva.value.rc_cedula.toString());
    formData.append('res_id', this.formularioReserva.value.res_id.toString());
    formData.append('rc_fecha', this.formularioReserva.value.rc_fecha.toString());
    formData.append('rc_hora', this.formularioReserva.value.rc_hora.toString());
    formData.append('np_id', this.formularioReserva.value.np_id.toString());
    formData.append('rc_descripcion', this.formularioReserva.value.rc_descripcion.toString());
    formData.append('tc_id', this.formularioReserva.value.tc_id.toString());
    this.ReservaClienteService.agregarReservaCliente(formData).subscribe(() => {
      this.formularioReserva.reset();
      this.toastr.success('Registro de Reserva', 'Completo');

    })
  }
  //Para agregar Evento del Cliente
  AgregarEventoCliente() {
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
    formData.append('ec_descripcion', this.formularioEvento.value.ec_descripcion.toString());
    formData.append('sm_id', this.formularioEvento.value.sm_id.toString());
    formData.append('tc_id', this.formularioEvento.value.tc_id.toString());
    this.EventoClienteService.agregarEventoCliente(formData).subscribe(() => {
      this.formularioEvento.reset();
      this.toastr.success('Registro de Evento', 'Completo');

    })
  }
  //Para Validaciones de reservas del cliente
  getRC_Nombres(rc_nombreCliente: string) {
    return this.formularioReserva.get(rc_nombreCliente);
  }
  getRC_Telefono(rc_telefono: string) {
    return this.formularioReserva.get(rc_telefono);
  }
  getRC_Cedula(rc_cedula: string) {
    return this.formularioReserva.get(rc_cedula);
  }
  getRC_tipoReserva(res_tipoReserva: string) {
    return this.formularioReserva.get(res_tipoReserva);
  }
  getRC_Fecha(rc_fecha: string) {
    return this.formularioReserva.get(rc_fecha);
  }
  getRC_Hora(rc_hora: string) {
    return this.formularioReserva.get(rc_hora);
  }
  getRC_numPersonas(np_id: string) {
    return this.formularioReserva.get(np_id);
  }
  getRC_descripcion(rc_descripcion: string) {
    return this.formularioReserva.get(rc_descripcion);
  }
  getRC_tipoCedula(tc_id: string) {
    return this.formularioReserva.get(tc_id);
  }
  //Para Validaciones de eventos del cliente
  getEC_Nombres(ec_nombreCliente: string) {
    return this.formularioEvento.get(ec_nombreCliente);
  }
  getEC_Telefono(ec_celular: string) {
    return this.formularioEvento.get(ec_celular);
  }
  getEC_Cedula(ec_cedula: string) {
    return this.formularioEvento.get(ec_cedula);
  }
  getEC_tipoEvento(eve_id: string) {
    return this.formularioEvento.get(eve_id);
  }
  getEC_tipoArreglo(arr_id: string) {
    return this.formularioEvento.get(arr_id);
  }
  getEC_Fecha(ec_fecha: string) {
    return this.formularioEvento.get(ec_fecha);
  }
  getEC_Hora(ec_hora: string) {
    return this.formularioEvento.get(ec_hora);
  }
  getEC_numAdultos(na_id: string) {
    return this.formularioEvento.get(na_id);
  }
  getEC_numNinios(nn_id: string) {
    return this.formularioEvento.get(nn_id);
  }
  getEC_descripcion(ec_descripcion: string) {
    return this.formularioEvento.get(ec_descripcion);
  }
  getEC_submenus(sm_id: string) {
    return this.formularioEvento.get(sm_id);
  }
  getEC_tipoCedula(tc_id: string) {
    return this.formularioEvento.get(tc_id);
  }

  ChangeMenu(id: any) {
    this.el_ID = id.target.value;
    this.submenusService.getSelectSubmenu(this.el_ID).subscribe(data => {
      this.submenuses = data;
      console.log(this.submenuses);
    });
  }

}
