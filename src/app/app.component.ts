import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Valle Hermoso';
  user:any;
  isOpen=true;
  isLogged:Boolean = false;
  isJefe:Boolean = false;
  isAdmin:Boolean=false;

  constructor(
    private router:Router,
    private usuarioService:UsuariosService,
    private toastr:ToastrService
    ) {
    this.onCheckUser();
    this.user=this.usuarioService.getCurrentUser();
   }
   ocultar() {
    this.isOpen = !this.isOpen;
  }
  onCheckUser(): void {
    if(this.usuarioService.getCurrentUser()==null){
      this.isLogged=false;
    }else{
      this.isLogged=true;
      console.log(this.usuarioService.getCurrentUser());
      if(this.usuarioService.getRol()=='1'){
        console.log("esAdmin");
        this.isAdmin=true;
        console.log(this.isAdmin);
        this.isJefe=false;
      }
      if(this.usuarioService.getRol()=='2'){
        this.isJefe=true;
        this.isAdmin=false;
      }
    }
  }

  InfoValleHermoso(){
    this.toastr.info('Valle Hermoso','Información');
    this.usuarioService.logOut();
    this.isAdmin=false;
    this.isJefe=false;
    this.router.navigateByUrl('/');
  }
  logOut(){
    this.toastr.info('Sesión finalizada');
    this.usuarioService.logOut();
    this.isAdmin=false;
    this.isJefe=false;
    this.router.navigateByUrl('/');
  }
}
