import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenusService } from 'src/app/services/menus.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formmenus',
  templateUrl: './formmenus.component.html',
  styleUrls: ['./formmenus.component.css']
})
export class FormmenusComponent implements OnInit {
  files: any;
  data: any;

  formularioMenus: FormGroup;
  fotoPattern: any = /^.*\.(jpg|png|jpeg)$/;

  constructor(
    private formulario: FormBuilder,
    private menusService: MenusService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.formularioMenus = this.formulario.group({
      men_foto:
        [null, [Validators.required, Validators.pattern(this.fotoPattern)]],
      men_nombre:
        [null, [Validators.required, Validators.minLength(5)]],
        men_cantidadPromedio:
        [null, [Validators.required, Validators.minLength(3)]],
      men_descripcion:
        [null, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      men_estado:
        [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formularioMenus.controls;
  }

  uploadImage(event: any) {
    this.files = event.target.files[0];
    console.log(this.files);
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('men_foto', this.files);
    formData.append('men_nombre', this.formularioMenus.value.men_nombre.toString());
    formData.append('men_cantidadPromedio', this.formularioMenus.value.men_cantidadPromedio.toString());
    formData.append('men_descripcion', this.formularioMenus.value.men_descripcion.toString());
    formData.append('men_estado', this.formularioMenus.value.men_estado.toString());
    this.menusService.uploadData(formData).subscribe(res => {
      this.data = res;
      console.log(this.data);
      this.toastr.success('Registro de Menú', 'Completo');
      this.router.navigateByUrl('menus');
    });
  }

  getMen_Nombre(men_nombre: string) {
    return this.formularioMenus.get(men_nombre);
  }
  getMen_CantidadPromedio(men_cantidadPromedio: string){
    return this.formularioMenus.get(men_cantidadPromedio);
  }
  getMen_Descripcion(men_descripcion: string) {
    return this.formularioMenus.get(men_descripcion);
  }
  getMen_Estado(men_estado: string) {
    return this.formularioMenus.get(men_estado);
  }
  getMen_Foto(men_foto: any) {
    return this.formularioMenus.get(men_foto);
  }
}
