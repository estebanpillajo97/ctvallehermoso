import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArreglosService } from 'src/app/services/arreglos.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formarreglos',
  templateUrl: './formarreglos.component.html',
  styleUrls: ['./formarreglos.component.css']
})
export class FormarreglosComponent implements OnInit {

  formularioArreglos: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private arreglosService: ArreglosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.formularioArreglos = this.formulario.group({
      arr_nombre:
        ['', [Validators.required, Validators.minLength(5)]],

      arr_descripcion:
        ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],

      arr_estado:
        ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  enviarDatosA(): any {
    let formData = new FormData();
    formData.append('arr_nombre', this.formularioArreglos.value.arr_nombre.toString());
    formData.append('arr_descripcion', this.formularioArreglos.value.arr_descripcion.toString());
    formData.append('arr_estado', this.formularioArreglos.value.arr_estado.toString());
    this.arreglosService.agregarArreglos(formData).subscribe(data => {
      this.toastr.success('Registro de arreglos', 'Completo');
      this.router.navigateByUrl('arreglos');
    });

  }

  getArr_Nombre(arr_nombre: string) {
    return this.formularioArreglos.get(arr_nombre);
  }
  getArr_Descripcion(arr_descripcion: string) {
    return this.formularioArreglos.get(arr_descripcion);
  }
  getArr_Estado(arr_estado: string) {
    return this.formularioArreglos.get(arr_estado);
  }
}
