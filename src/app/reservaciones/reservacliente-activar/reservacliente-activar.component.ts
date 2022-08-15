import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
import { ReservaClienteService } from 'src/app/services/reserva-cliente.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservacliente-activar',
  templateUrl: './reservacliente-activar.component.html',
  styleUrls: ['./reservacliente-activar.component.css']
})
export class ReservaclienteActivarComponent implements OnInit {
  elID: any;
  reserva: any;
  numpersonas:any;
  tipocedula:any;
  formularioReserva: FormGroup;
  constructor(
    private reservacionService: ReservacionesService,
    private ReservaClienteService: ReservaClienteService,
    private ActivatedRoute: ActivatedRoute,
    private formularioRes: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.elID = this.ActivatedRoute.snapshot.paramMap.get('rc_id');
    this.ReservaClienteService.obtenerReservaCliente(this.elID).subscribe((result: any) => {
      this.formularioReserva.setValue({
        rc_nombreCliente: result[0]['rc_nombreCliente'],
        rc_cedula: result[0]['rc_cedula'],
        rc_celular: result[0]['rc_celular'],
        res_id: result[0]['res_id'],
        rc_fecha: result[0]['rc_fecha'],
        rc_hora: result[0]['rc_hora'],
        np_id: result[0]['np_id'],
        tc_id: result[0]['tc_id'],
        sa_id: result[0]['sa_id'],
        rc_descripcion: result[0]['rc_descripcion'],
        rc_estado: result[0]['rc_estado']

      });
    });
    this.formularioReserva = this.formularioRes.group({
      rc_nombreCliente: [''],
      rc_cedula: [''],
      rc_celular: [''],
      res_id: [''],
      rc_fecha: [''],
      rc_hora: [''],
      np_id: [''],
      tc_id: [''],
      sa_id: [''],
      rc_descripcion: [''],
      rc_estado: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.getReservas();
    this.getNumPersonas();
    this.getTipoCedula();
  }
  getReservas() {
    this.reservacionService.get().subscribe((res: any) => {
      this.reserva = res;
      console.log(this.reserva);
    })
  }
  getNumPersonas(){
    this.reservacionService.getNumPersonas().subscribe((res:any)=>{
      this.numpersonas = res;
      console.log(this.numpersonas);
    })
  }
  getTipoCedula(){
    this.reservacionService.getTipoCedula().subscribe((res:any)=>{
      this.tipocedula = res;
      console.log(this.tipocedula);
    })
  }

  modificarReservaCliente() {
    let formData = new FormData();
    formData.append('rc_nombreCliente', this.formularioReserva.value.rc_nombreCliente.toString());
    formData.append('rc_celular', this.formularioReserva.value.rc_celular.toString());
    formData.append('rc_cedula', this.formularioReserva.value.rc_cedula.toString());
    formData.append('res_id', this.formularioReserva.value.res_id.toString());
    formData.append('rc_fecha', this.formularioReserva.value.rc_fecha.toString());
    formData.append('rc_hora', this.formularioReserva.value.rc_hora.toString());
    formData.append('np_id', this.formularioReserva.value.np_id.toString());
    formData.append('tc_id', this.formularioReserva.value.tc_id.toString());
    formData.append('sa_id', this.formularioReserva.value.sa_id.toString());
    formData.append('rc_descripcion', this.formularioReserva.value.rc_descripcion.toString());
    formData.append('rc_estado', this.formularioReserva.value.rc_estado.toString());
    this.ReservaClienteService.editarReservaCliente(this.elID, formData).subscribe(() => {
      this.toastr.success('Edición de información', 'Completa')
      this.router.navigateByUrl('reservas_cliente')
    });
  }
  getRC_Estado(rc_estado: string) {
    return this.formularioReserva.get(rc_estado);
  }
}
