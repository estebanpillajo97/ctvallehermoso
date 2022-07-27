import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editroles',
  templateUrl: './editroles.component.html',
  styleUrls: ['./editroles.component.css']
})
export class EditrolesComponent implements OnInit {
  elID: any;
  formularioRoles: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private rolesService: RolesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.elID = this.ActivatedRoute.snapshot.paramMap.get('rol_id');
    this.rolesService.obtenerRol(this.elID).subscribe((result: any) => {
      this.formularioRoles.setValue({
        rol_nombre: result[0]['rol_nombre'],
        rol_descripcion: result[0]['rol_descripcion'],
        rol_estado: result[0]['rol_estado']
      });
    });
    this.formularioRoles = this.formulario.group({
      rol_nombre: [''],
      rol_descripcion: [''],
      rol_estado: ['']
    });
  }

  ngOnInit(): void {
  }

  modificarRoles() {
    let formData = new FormData();
    formData.append('rol_nombre', this.formularioRoles.value.rol_nombre.toString());
    formData.append('rol_descripcion', this.formularioRoles.value.rol_descripcion.toString());
    formData.append('rol_estado', this.formularioRoles.value.rol_estado.toString());
    this.rolesService.editarRoles(this.elID, formData).subscribe(() => {
      this.toastr.success('Edición de información', 'Completa')
      this.router.navigateByUrl('roles')
    });
  }

}
