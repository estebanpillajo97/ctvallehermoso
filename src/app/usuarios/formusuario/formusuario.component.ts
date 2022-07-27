import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { RolesService } from 'src/app/services/roles.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent implements OnInit {

  formularioUsuarios:FormGroup;
  data:any;
  rol:any=[];
  message:any;
  status:any;
  constructor( 
    private formulario:FormBuilder, 
    private usuariosService: UsuariosService,
    private rolService:RolesService, 
    private toastr:ToastrService,
    private router: Router
    ) {
    
    this.formularioUsuarios=this.formulario.group({
      usu_nombres:
      ['',[Validators.required, Validators.minLength(10), Validators.maxLength(60)]],

      usu_cedula:
      ['',[Validators.required, Validators.minLength(10), Validators.maxLength(13)]],

      usu_direccion:
      ['',[Validators.required, Validators.minLength(10), Validators.maxLength(50)]],

      usu_telefono:
      ['',[Validators.required, Validators.minLength(10), Validators.maxLength(15)]],

      usu_usuario:
      ['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],

      usu_password:
      ['',[Validators.required, Validators.minLength(8), Validators.maxLength(50)]],

      rol_id:
      ['',[Validators.required]],

      usu_estado:
      ['',[Validators.required]]

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

  enviarDatosU():any{
    console.log("Me presionaste");
    console.log(this.formularioUsuarios.value);
    
    this.usuariosService.agregarUsuario(this.formularioUsuarios.value).subscribe(res=>{
      this.data = res;
      this.message=this.data.message;
      this.status=this.data.status;
      if(this.status==1){
        this.toastr.warning('Por favor cambiar el usuario',this.message);
      }else{
        this.toastr.success('Bienvenido',this.message+" "+this.formularioUsuarios.value.usu_nombres);
        this.formularioUsuarios.reset();
        this.router.navigateByUrl('login');
      }   
    });
    
  }

  getUsu_Nombre(usu_nombres:string){
    return this.formularioUsuarios.get(usu_nombres);
  }
  getUsu_Cedula(usu_cedula:string){
    return this.formularioUsuarios.get(usu_cedula);
  }
  getUsu_Direccion(usu_direccion:string){
    return this.formularioUsuarios.get(usu_direccion);
  }
  getUsu_Telefono(usu_telefono:string){
    return this.formularioUsuarios.get(usu_telefono);
  }
  getUsu_Usuario(usu_usuario:string){
    return this.formularioUsuarios.get(usu_usuario);
  }
  getUsu_Password(usu_password:string){
    return this.formularioUsuarios.get(usu_password);
  }
  getRol_Nombre(rol_id:any){
    return this.formularioUsuarios.get(rol_id);
  }
  getUsu_Estado(usu_estado:string){
    return this.formularioUsuarios.get(usu_estado);
  }
}
