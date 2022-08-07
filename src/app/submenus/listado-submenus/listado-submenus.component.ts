import { Component, OnInit } from '@angular/core';
import { SubmenusService } from 'src/app/services/submenus.service';
@Component({
  selector: 'app-listado-submenus',
  templateUrl: './listado-submenus.component.html',
  styleUrls: ['./listado-submenus.component.css']
})
export class ListadoSubmenusComponent implements OnInit {
  API_ENDPOINT='http://localhost/apirestvh/public/api';
  submenus:any;
  p: any = 1;
  constructor(private submenusService: SubmenusService) { 
    this.getSubmenu();
  }

  ngOnInit(): void {
  }
  getSubmenu(){
    this.submenusService.getListadoCompleto().subscribe((data:any)=>{
      this.submenus=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
}
