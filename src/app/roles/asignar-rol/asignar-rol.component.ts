import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-asignar-rol',
  templateUrl: './asignar-rol.component.html',
  styleUrls: ['./asignar-rol.component.css']
})
export class AsignarRolComponent implements OnInit {
usuarios:any;
  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.getSinRol();
  }

  getSinRol(){
    this.rolesService.getSinRoles().subscribe((data:any)=>{
      this.usuarios=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
