import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RolesService } from 'src/app/services/roles.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-editusuarios',
  templateUrl: './editusuarios.component.html',
  styleUrls: ['./editusuarios.component.css']
})
export class EditusuariosComponent implements OnInit {
  rol:any;
  rol_id:any;
  usu_id: any;
  editarUsuariosForm:any=FormGroup;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private usuariosService: UsuariosService,
    private rolService:RolesService,
    private formulario:FormBuilder,
    private toastr:ToastrService,
    private router: Router
  ) { 
    this.usu_id = this.ActivatedRoute.snapshot.paramMap.get('usu_id');
    this.usuariosService.obtenerUsuario(this.usu_id).subscribe((result: any) => {
      console.log(result);
      this.editarUsuariosForm.setValue({
        usu_nombres: result[0]['usu_nombres'],
        rol_id: result[0]['rol_id'],
        usu_cedula: result[0]['usu_cedula'],
        usu_direccion: result[0]['usu_direccion'],
        usu_telefono: result[0]['usu_telefono'],
        usu_usuario: result[0]['usu_usuario'],
        usu_password: result[0]['usu_password'],
        usu_estado: result[0]['usu_estado']
      });
    });
    this.editarUsuariosForm = this.formulario.group({
      usu_nombres: [''],
      rol_id: [''],
      usu_cedula: [''],
      usu_direccion: [''],
      usu_telefono: [''],
      usu_usuario:[''],
      usu_password:[''],
      usu_estado:[''],
    });
  }

  ngOnInit(): void {
    this.getRol();
  }

  getRol(){
    this.rolService.get().subscribe((res:any)=>{
      this.rol=res;
      console.log(this.rol);
    })
  }

  updateUsuarios(){
    let formData = new FormData();
    formData.append('rol_id', this.editarUsuariosForm.value.rol_id.toString());
    formData.append('usu_nombres', this.editarUsuariosForm.value.usu_nombres.toString());
    formData.append('usu_cedula', this.editarUsuariosForm.value.usu_cedula.toString());
    formData.append('usu_direccion', this.editarUsuariosForm.value.usu_direccion.toString());
    formData.append('usu_telefono', this.editarUsuariosForm.value.usu_telefono.toString());
    formData.append('usu_usuario', this.editarUsuariosForm.value.usu_usuario.toString());
    formData.append('usu_password', this.editarUsuariosForm.value.usu_password.toString());
    formData.append('usu_estado', this.editarUsuariosForm.value.usu_estado.toString());
    this.usuariosService.modificarUsuarios(this.usu_id, formData).subscribe(() => {
      this.toastr.success('Edición de información', 'Completa');
      this.router.navigateByUrl('usuarios');
    })
  }
}
