import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventosService } from 'src/app/services/eventos.service';
@Component({
  selector: 'app-editeventos',
  templateUrl: './editeventos.component.html',
  styleUrls: ['./editeventos.component.css']
})
export class EditeventosComponent implements OnInit {

  editarEventos: FormGroup;
  eve_id: any;

  constructor(
    private formulario: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private eventosService: EventosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.eve_id = this.ActivatedRoute.snapshot.paramMap.get('eve_id');
    this.eventosService.obtenerEvento(this.eve_id).subscribe((result: any) => {
      console.log(result);
      this.editarEventos.setValue({
        eve_nombre: result[0]['eve_nombre'],
        eve_descripcion: result[0]['eve_descripcion'],
        eve_estado: result[0]['eve_estado']
      });
    });

    this.editarEventos = this.formulario.group({
      eve_nombre: [''],
      eve_descripcion: [''],
      eve_estado: ['']
    });
  }

  ngOnInit(): void {
  }

  updateEventos() {
    let formData = new FormData();
    formData.append('eve_nombre', this.editarEventos.value.eve_nombre.toString());
    formData.append('eve_descripcion', this.editarEventos.value.eve_descripcion.toString());
    formData.append('eve_estado', this.editarEventos.value.eve_estado.toString());
    this.eventosService.editarEventos(this.eve_id, formData).subscribe(() => {
      this.toastr.success('Edición de arreglos', 'Completa');
      this.router.navigateByUrl('arreglos')
    });
  }

}
