import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubmenusService } from 'src/app/services/submenus.service';
import { MenusService } from 'src/app/services/menus.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formsubmenus',
  templateUrl: './formsubmenus.component.html',
  styleUrls: ['./formsubmenus.component.css']
})
export class FormsubmenusComponent implements OnInit {
  formularioSubmenu: FormGroup;
  precioPattern: any = /^\d*\.?\d{0,2}$/g;
  menu: any = [];
  data: any;

  constructor(
    private formulario: FormBuilder,
    private submenusService: SubmenusService,
    private menuService: MenusService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.formularioSubmenu = this.formulario.group({
      men_id:
        ['', [Validators.required]],

      sm_nombre:
        ['', [Validators.required,Validators.minLength(10), Validators.maxLength(50)]],

      sm_descripcion:
        ['', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]],

      sm_precio:
        ['', [Validators.required, Validators.pattern(this.precioPattern)]],

      sm_cantidadPromedio:['',Validators.required],

      sm_estado:
        ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getMenu();
  }

  //Mostrar los datos de menús
  getMenu() {
    this.menuService.get().subscribe((res: any) => {
      this.menu = res;
      console.log(this.menu);
    })
  }

  AgregarSubmenu() {
    let formData = new FormData();
    formData.append('men_id', this.formularioSubmenu.value.men_id.toString());
    formData.append('sm_nombre', this.formularioSubmenu.value.sm_nombre.toString());
    formData.append('sm_descripcion', this.formularioSubmenu.value.sm_descripcion.toString());
    formData.append('sm_precio', this.formularioSubmenu.value.sm_precio.toString());
    formData.append('sm_cantidadPromedio', this.formularioSubmenu.value.sm_cantidadPromedio.toString());
    formData.append('sm_estado', this.formularioSubmenu.value.sm_estado.toString());
    this.submenusService.agregarSubmenu(formData).subscribe(() => {
      this.toastr.success('Registro de Submenú', 'Completo');
      this.router.navigateByUrl('submenus');
    })

  }

  getMen_Nombre(men_id:any){
    return this.formularioSubmenu.get(men_id);
  }
  getSM_Nombre(sm_nombre:string){
    return this.formularioSubmenu.get(sm_nombre);
  }
  getSM_Descripcion(sm_descripcion:string){
    return this.formularioSubmenu.get(sm_descripcion);
  }
  getSM_Precio(sm_precio:any){
    return this.formularioSubmenu.get(sm_precio);
  }
  getSM_CantidadPromedio(sm_cantidadPromedio:any){
    return this.formularioSubmenu.get(sm_cantidadPromedio);
  }
  getSM_Estado(sm_estado:string){
    return this.formularioSubmenu.get(sm_estado);
  }

}
