import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  API_ENDPOINT='http://localhost/apirestvh/public/api';
  usuarios:any;
  usu_id:any;
  usuarios_id:any;
  p: any = 1;
  rol:any;
  searchText:any;
  constructor(private usuariosService: UsuariosService, private ActivatedRoute:ActivatedRoute) {
    this.getUsers();
   }

  ngOnInit(): void {
    
  }

  getUsers(){
    this.usuariosService.get().subscribe((data:any)=>{
      this.usuarios=data;
      console.log(this.usuarios);
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  inactivarUsuarios(id:any){
    this.usuariosService.inactivarUsuario(id).subscribe((data)=>{
      this.getUsers();
    },error=>{
      console.log(error);
    });
  }

  activarUsuario(id:any){
    this.usuariosService.activarUsuario(id).subscribe((data)=>{
      this.getUsers();
    },error=>{
      console.log(error);
    });
  }

}
