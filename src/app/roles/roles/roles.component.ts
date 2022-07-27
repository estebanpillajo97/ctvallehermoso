import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  API_ENDPOINT='http://localhost/apirestvh/public/api';
  rol:any;
  constructor(private rolesService: RolesService) { 
    this.getRoles();
  }

  ngOnInit(): void {
  }

  getRoles(){
    this.rolesService.get().subscribe((data:any)=>{
      this.rol=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
