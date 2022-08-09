import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubmenusService } from 'src/app/services/submenus.service';
import { MenusService } from 'src/app/services/menus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editsubmenus',
  templateUrl: './editsubmenus.component.html',
  styleUrls: ['./editsubmenus.component.css']
})
export class EditsubmenusComponent implements OnInit {
  editarSubmenu: FormGroup;
  menu: any;
  sm_id: any;
  constructor(
    private formulario: FormBuilder,
    private submenusService: SubmenusService,
    private menuService: MenusService,
    private ActivatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.sm_id = this.ActivatedRoute.snapshot.paramMap.get('sm_id');
    this.submenusService.obtenerSubmenu(this.sm_id).subscribe((result: any) => {
      console.log(result);
      this.editarSubmenu.setValue({
        sm_nombre: result[0]['sm_nombre'],
        men_id: result[0]['men_id'],
        sm_descripcion: result[0]['sm_descripcion'],
        sm_precio: result[0]['sm_precio'],
        sm_estado: result[0]['sm_estado']
      });
    });
    this.editarSubmenu = this.formulario.group({
      sm_nombre: [''],
      men_id: [''],
      sm_descripcion: [''],
      sm_precio: [''],
      sm_estado: ['']
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

  editarSubmenus() {
    let formData = new FormData();
    formData.append('men_id', this.editarSubmenu.value.men_id.toString());
    formData.append('sm_nombre', this.editarSubmenu.value.sm_nombre.toString());
    formData.append('sm_descripcion', this.editarSubmenu.value.sm_descripcion.toString());
    formData.append('sm_precio', this.editarSubmenu.value.sm_precio.toString());
    formData.append('sm_estado', this.editarSubmenu.value.sm_estado.toString());
    this.submenusService.modificarSubmenu(this.sm_id, formData).subscribe(() => {
      this.toastr.success('Edición de información', 'Completa');
      this.router.navigateByUrl('submenus');
    })
  }
}
