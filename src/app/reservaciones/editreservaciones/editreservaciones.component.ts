import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ReservacionesService } from 'src/app/services/reservaciones.service';
@Component({
  selector: 'app-editreservaciones',
  templateUrl: './editreservaciones.component.html',
  styleUrls: ['./editreservaciones.component.css']
})
export class EditreservacionesComponent implements OnInit {

  editarReservaciones: FormGroup
  res_id: any;

  constructor(
    private formulario: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private reservacionesService: ReservacionesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.res_id = this.ActivatedRoute.snapshot.paramMap.get('res_id');
    this.reservacionesService.obtenerReservacion(this.res_id).subscribe((result: any) => {
      console.log(result);
      this.editarReservaciones.setValue({
        res_nombre: result[0]['res_nombre'],
        res_descripcion: result[0]['res_descripcion'],
        res_estado: result[0]['res_estado']
      });
    });
    this.editarReservaciones = this.formulario.group({
      res_nombre: [''],
      res_descripcion: [''],
      res_estado: ['']
    })
  }

  ngOnInit(): void {
  }

  updateReservaciones() {
    let formData = new FormData();
    formData.append('res_nombre', this.editarReservaciones.value.res_nombre.toString());
    formData.append('res_descripcion', this.editarReservaciones.value.res_descripcion.toString());
    formData.append('res_estado', this.editarReservaciones.value.res_estado.toString());
    this.reservacionesService.editarReservacion(this.res_id, formData).subscribe(() => {
      this.toastr.success('Edición de reservación', 'Completa');
      this.router.navigateByUrl('reservaciones')
    });
  }
}
