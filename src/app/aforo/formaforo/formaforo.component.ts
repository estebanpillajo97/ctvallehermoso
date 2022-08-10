import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AforoService } from 'src/app/services/aforo.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formaforo',
  templateUrl: './formaforo.component.html',
  styleUrls: ['./formaforo.component.css']
})
export class FormaforoComponent implements OnInit {

  formularioAforo: FormGroup;
  
  constructor(
    private formulario: FormBuilder,
    private aforoService: AforoService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.formularioAforo = this.formulario.group({
      sa_nombre:
        ['', [Validators.required, Validators.minLength(5)]],

      sa_capacidad:
        ['', [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],

      sa_disponibilidad:
        ['', [Validators.required]],

      sa_estado:
        ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  enviarDatosA(): any {
    let formData = new FormData();
    formData.append('sa_nombre', this.formularioAforo.value.sa_nombre.toString());
    formData.append('sa_capacidad', this.formularioAforo.value.sa_capacidad.toString());
    formData.append('sa_disponibilidad', this.formularioAforo.value.sa_disponibilidad.toString());
    formData.append('sa_estado', this.formularioAforo.value.sa_estado.toString());
    this.aforoService.agregarSalon(formData).subscribe(data => {
      this.toastr.success('Regristo de salón', 'Completo');
      this.router.navigateByUrl('salones');
    });

  }
}
