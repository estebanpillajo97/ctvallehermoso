import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventosService } from 'src/app/services/eventos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-formeventos',
  templateUrl: './formeventos.component.html',
  styleUrls: ['./formeventos.component.css']
})
export class FormeventosComponent implements OnInit {

  formularioEventos: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private eventosService: EventosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.formularioEventos = this.formulario.group({
      eve_nombre:
        ['', [Validators.required, Validators.minLength(5)]],

      eve_descripcion:
        ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],

      eve_estado:
        ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  enviarDatosE(): any {
    let formData = new FormData();
    formData.append('eve_nombre', this.formularioEventos.value.eve_nombre.toString());
    formData.append('eve_descripcion', this.formularioEventos.value.eve_descripcion.toString());
    formData.append('eve_estado', this.formularioEventos.value.eve_estado.toString());
    this.eventosService.agregarEventos(formData).subscribe(data => {
      this.toastr.success('Regristo de eventos', 'Completo');
      this.router.navigateByUrl('eventos');
    });

  }

  getEve_Nombre(eve_nombre: string) {
    return this.formularioEventos.get(eve_nombre);
  }
  getEve_Descripcion(eve_descripcion: string) {
    return this.formularioEventos.get(eve_descripcion);
  }
  getEve_Estado(eve_estado: string) {
    return this.formularioEventos.get(eve_estado);
  }
}
