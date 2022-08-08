import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AforoService } from 'src/app/services/aforo.service'; 
import { FormGroup, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editaforo',
  templateUrl: './editaforo.component.html',
  styleUrls: ['./editaforo.component.css']
})
export class EditaforoComponent implements OnInit {

  editarAforo: FormGroup;
  af_id: any;

  constructor(
    private formulario: FormBuilder,
    private ActivatedRoute: ActivatedRoute,
    private aforoService:AforoService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.af_id = this.ActivatedRoute.snapshot.paramMap.get('af_id');
    this.aforoService.obtenerAforo(this.af_id).subscribe((result: any) => {
      console.log(result);
      this.editarAforo.setValue({
        af_numeroAforo: result[0]['af_numeroAforo']
      });
    });
    this.editarAforo = this.formulario.group({
      af_numeroAforo: ['']
    });
   }

  ngOnInit(): void {
  }

  updateAforo() {
    let formData = new FormData();
    formData.append('af_numeroAforo', this.editarAforo.value.af_numeroAforo.toString());
    this.aforoService.editarAforo(this.af_id, formData).subscribe(() => {
      this.toastr.success('Edición de aforo', 'Completa');
      this.router.navigateByUrl('aforo')
    });
  }
}
