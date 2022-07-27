import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArreglosService } from 'src/app/services/arreglos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-editarreglos',
  templateUrl: './editarreglos.component.html',
  styleUrls: ['./editarreglos.component.css']
})
export class EditarreglosComponent implements OnInit {

  editarArreglos: FormGroup;
  arr_id: any;

  constructor(
    private formulario: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private arreglosService: ArreglosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.arr_id = this.ActivatedRoute.snapshot.paramMap.get('arr_id');
    this.arreglosService.obtenerArreglo(this.arr_id).subscribe((result: any) => {
      console.log(result);
      this.editarArreglos.setValue({
        arr_nombre: result[0]['arr_nombre'],
        arr_descripcion: result[0]['arr_descripcion'],
        arr_estado: result[0]['arr_estado']
      });
    });
    this.editarArreglos = this.formulario.group({
      arr_nombre: [''],
      arr_descripcion: [''],
      arr_estado: ['']
    });
  }

  ngOnInit(): void {
  }

  updateArreglos() {
    let formData = new FormData();
    formData.append('arr_nombre', this.editarArreglos.value.arr_nombre.toString());
    formData.append('arr_descripcion', this.editarArreglos.value.arr_descripcion.toString());
    formData.append('arr_estado', this.editarArreglos.value.arr_estado.toString());
    this.arreglosService.editarArreglos(this.arr_id, formData).subscribe(() => {
      this.toastr.success('Edición de arreglos', 'Completa');
      this.router.navigateByUrl('arreglos')
    });
  }

}
