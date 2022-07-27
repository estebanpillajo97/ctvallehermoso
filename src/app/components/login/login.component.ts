import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin:any = FormGroup;
  users:any=[];
  constructor(
    private usuarioService:UsuariosService, 
    private formulario:FormBuilder,
    private toastr:ToastrService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.formularioLogin=this.formulario.group({
      usu_usuario:['',Validators.required],
      usu_password:['',[Validators.required,Validators.minLength(8)]]
    })

  }

  loginSubmit(data:any){
    this.usuarioService.verificarLogin(this.formularioLogin.value).subscribe((data:any)=>{
      if(data=='403' || data==null){
        this.toastr.error('Usuario/Contraseña','Inicio de Sesión Incorrecta');
        this.formularioLogin.reset();
      }else{
        this.toastr.success('Bienvenido','Inicio de Sesión Correcta');
        this.usuarioService.setUser(data[0].usu_usuario);
        this.usuarioService.setToken(data[0].usu_id);
        this.usuarioService.setRol(data[0].rol_id);
        this.formularioLogin.reset();
        window.location.href = '/';
      }
    })
  }

  goToSingUp(){
    this.router.navigateByUrl('crear_usuario');
  }

  //Validaciones
  getUsu_Usuario(usu_usuario:any){
    return this.formularioLogin.get(usu_usuario);
  }

  getUsu_Password(usu_password:any){
    return this.formularioLogin.get(usu_password);
  }
}
