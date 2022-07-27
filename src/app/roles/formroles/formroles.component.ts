import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formroles',
  templateUrl: './formroles.component.html',
  styleUrls: ['./formroles.component.css']
})
export class FormrolesComponent implements OnInit {
  data: any;
  formularioRoles: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private rolesService: RolesService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.formularioRoles = this.formulario.group({
      rol_nombre:
        ['', [Validators.required, Validators.minLength(5)]],

      rol_descripcion:
        ['', [Validators.required, Validators.minLength(10), Validators.maxLength(60)]],

      rol_estado:
        ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  getRol_Nombre(rol_nombre: string) {
    return this.formularioRoles.get(rol_nombre);
  }
  getRol_Descripcion(rol_descripcion: string) {
    return this.formularioRoles.get(rol_descripcion);
  }
  getRol_Estado(rol_estado: string) {
    return this.formularioRoles.get(rol_estado);
  }

  CrearRol() {
    let formData = new FormData();
    formData.append('rol_nombre', this.formularioRoles.value.rol_nombre.toString());
    formData.append('rol_descripcion', this.formularioRoles.value.rol_descripcion.toString());
    formData.append('rol_estado', this.formularioRoles.value.rol_estado.toString());
    this.rolesService.agregarRoles(formData).subscribe(() => {
      this.toastr.success('Registro de roles', 'Completo');
      this.router.navigateByUrl('roles');
    })
  }

  Cancelar() {
    this.toastr.warning('Registro de roles', 'Cancelado');
  }
}
