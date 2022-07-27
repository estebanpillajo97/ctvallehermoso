import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-listado-menus',
  templateUrl: './listado-menus.component.html',
  styleUrls: ['./listado-menus.component.css']
})
export class ListadoMenusComponent implements OnInit {
  menus:any;
  Directory:any ='https://apirestvh.herokuapp.com/api/uploads/';
  constructor(private menusService: MenusService) {this.getMenus(); }

  ngOnInit(): void {
  }

  getMenus(){
    this.menusService.getListado().subscribe(data=>{
      this.menus=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }
  inactivarMenus(id:any){
    this.menusService.inactivarMenus(id).subscribe((data)=>{
      this.getMenus();
    },error=>{
      console.log(error);
    });
  }

  activarMenus(id:any){
    this.menusService.activarMenus(id).subscribe((data)=>{
      this.getMenus();
    },error=>{
      console.log(error);
    });
  }

}
