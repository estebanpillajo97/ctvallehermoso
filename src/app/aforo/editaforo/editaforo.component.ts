import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AforoService } from 'src/app/services/aforo.service'; 
import { FormGroup, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editaforo',
  templateUrl: './editaforo.component.html',
  styleUrls: ['./editaforo.component.css']
})
export class EditaforoComponent implements OnInit {

  editarAforo: FormGroup;
  sa_id: any;

  constructor(
    private formulario: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private aforoService:AforoService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.sa_id = this.ActivatedRoute.snapshot.paramMap.get('sa_id');
    this.aforoService.obtenerSalones(this.sa_id).subscribe((result: any) => {
      console.log(result);
      this.editarAforo.setValue({
        sa_nombre: result[0]['sa_nombre'],
        sa_capacidad: result[0]['sa_capacidad'],
        sa_disponibilidad: result[0]['sa_disponibilidad'],
        sa_estado: result[0]['sa_estado']
      });
    });
    this.editarAforo = this.formulario.group({
      sa_nombre: [''],
      sa_capacidad: [''],
      sa_disponibilidad: [''],
      sa_estado: ['']
    });
   }

  ngOnInit(): void {
  }

  updateAforo() {
    let formData = new FormData();
    formData.append('sa_nombre', this.editarAforo.value.sa_nombre.toString());
    formData.append('sa_capacidad', this.editarAforo.value.sa_capacidad.toString());
    formData.append('sa_disponibilidad', this.editarAforo.value.sa_disponibilidad.toString());
    formData.append('sa_estado', this.editarAforo.value.sa_estado.toString());
    this.aforoService.editarSalones(this.sa_id, formData).subscribe(() => {
      this.toastr.success('Edición de aforo', 'Completa');
      this.router.navigateByUrl('aforo');
    });
  }
}
