import { Component, OnInit } from '@angular/core';
import { SubmenusService } from 'src/app/services/submenus.service';
@Component({
  selector: 'app-submenus',
  templateUrl: './submenus.component.html',
  styleUrls: ['./submenus.component.css']
})
export class SubmenusComponent implements OnInit {
  API_ENDPOINT='http://localhost/apirestvh/public/api';
  submenus:any;
  p: any = 1;

  constructor(private submenusService: SubmenusService) {
    this.getSubmenu();
   }

  ngOnInit(): void {
    
  }

  getSubmenu(){
    this.submenusService.get().subscribe((data:any)=>{
      this.submenus=data;
    }, error=>{
      console.log(error);
      alert('Ocurrió un error');
    });
  }

  inactivarSubmenus(id:any){
    this.submenusService.inactivarSubmenus(id).subscribe((data)=>{
      this.getSubmenu();
    },error=>{
      console.log(error);
    });
  }

  activarSubmenus(id:any){
    this.submenusService.activarSubmenus(id).subscribe((data)=>{
      this.getSubmenu();
    },error=>{
      console.log(error);
    });
  }
}
