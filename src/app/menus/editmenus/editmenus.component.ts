import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-editmenus',
  templateUrl: './editmenus.component.html',
  styleUrls: ['./editmenus.component.css']
})
export class EditmenusComponent implements OnInit {
  files: any;
  men_id: any;
  editarMenus: FormGroup;

  constructor(
    private formulario: FormBuilder,
    private menusService: MenusService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.men_id = this.activatedRoute.snapshot.paramMap.get('men_id');
    this.menusService.obtenerMenu(this.men_id).subscribe((result: any) => {
      console.log(result);
      this.editarMenus.setValue({
        men_nombre: result[0]['men_nombre'],
        men_foto: [''],
        men_descripcion: result[0]['men_descripcion'],
        men_estado: result[0]['men_estado']
      });
    });
    this.editarMenus = this.formulario.group({
      men_nombre: [''],
      men_foto: [''],
      men_descripcion: [''],
      men_estado: ['']
    });
  }

  ngOnInit(): void {
  }

  uploadImage(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);
  }
  /*updateMenu(){
    this.menusService.modificarMenus(this.menu).subscribe((data) => {
      //alert('Película Actualizada');
      console.log(data)
      location.reload();
    }, (error) => {
      console.log(error);
      alert('Ocurrió un error');
    });
    this.router.navigateByUrl('menus');
  }*/
  updateMenu() {
    let formData = new FormData();
    formData.append('men_foto', this.files);
    formData.append('men_nombre', this.editarMenus.value.men_nombre.toString());
    formData.append('men_descripcion', this.editarMenus.value.men_descripcion.toString());
    formData.append('men_estado', this.editarMenus.value.men_estado.toString());
    this.menusService.editarMenus(this.men_id, formData).subscribe(() => {
      this.toastr.success('Edición de información', 'Completa');
      this.router.navigateByUrl('menus');
    });
  }
}
