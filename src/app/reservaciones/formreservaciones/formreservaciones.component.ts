import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
@Component({
  selector: 'app-formreservaciones',
  templateUrl: './formreservaciones.component.html',
  styleUrls: ['./formreservaciones.component.css']
})
export class FormreservacionesComponent implements OnInit {

  formularioReservaciones: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private reservacionesService: ReservacionesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.formularioReservaciones = this.formulario.group({
      res_nombre:
        ['', [Validators.required, Validators.minLength(5)]],

      res_descripcion:
        ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],

      res_estado:
        ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  enviarDatosR(): any {
    let formData = new FormData();
    formData.append('res_nombre', this.formularioReservaciones.value.res_nombre.toString());
    formData.append('res_descripcion', this.formularioReservaciones.value.res_descripcion.toString());
    formData.append('res_estado', this.formularioReservaciones.value.res_estado.toString());
    this.reservacionesService.agregarReservaciones(formData).subscribe(data => {
      this.toastr.success('Registro de reservaciones', 'Completo')
      this.router.navigateByUrl('reservaciones');
    });
  }

  getRes_Nombre(res_nombre: string) {
    return this.formularioReservaciones.get(res_nombre);
  }
  getRes_Descripcion(res_descripcion: string) {
    return this.formularioReservaciones.get(res_descripcion);
  }
  getRes_Estado(res_estado: string) {
    return this.formularioReservaciones.get(res_estado);
  }
}
