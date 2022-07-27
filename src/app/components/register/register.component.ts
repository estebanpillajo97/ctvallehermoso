import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any;
  isOpen=true;
  isLogged = false;
  isJefe = false;
  isAdmin = false;

  constructor(private router:Router,private usuarioService:UsuariosService) {
    this.ngOnInit();
    this.user=this.usuarioService.getCurrentUser();
   }

   ocultar() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    if(this.usuarioService.getCurrentUser()==null){
      this.isLogged=false;
    }else{
      this.isLogged==true;
      if(this.usuarioService.getRol()=='4'){
        this.isAdmin==true;
        this.isJefe==false;
      }
      if(this.usuarioService.getRol()=='14'){
        this.isJefe==true;
        this.isAdmin==false;
      }
    }
  }

  logOut(){
    this.usuarioService.logOut();
    this.router.navigateByUrl('login');
  }

}
