import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/services/menus.service';
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  Directory:any ='https://apirestvh.herokuapp.com/api/uploads/';
  menus:any;
  p: any = 1;
  constructor(private menusService: MenusService) {
    this.getMenus();
   }

  ngOnInit(): void {
    
  }

  getMenus(){
    this.menusService.get().subscribe(data=>{
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
