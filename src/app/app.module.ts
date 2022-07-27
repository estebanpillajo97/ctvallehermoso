import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

import { LoginComponent } from './components/login/login.component';
import { AuthAdminGuard } from './guards/auth-admin.guard';
import { AuthGuard } from './guards/auth.guard';
//Paginación
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Filtro de Datos para Buúsqueda
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//usuarios
import { UsuarioComponent } from './usuarios/usuario/usuario.component';
import { FormusuarioComponent } from './usuarios/formusuario/formusuario.component';
import { EditusuariosComponent } from './usuarios/editusuarios/editusuarios.component';
//Eventos
import { EventosComponent } from './eventos/eventos/eventos.component';
import { FormeventosComponent } from './eventos/formeventos/formeventos.component';
import { EditeventosComponent } from './eventos/editeventos/editeventos.component';
//Reservaciones
import { ReservacionesComponent } from './reservaciones/reservaciones/reservaciones.component';
import { FormreservacionesComponent } from './reservaciones/formreservaciones/formreservaciones.component';
import { EditreservacionesComponent } from './reservaciones/editreservaciones/editreservaciones.component';
//Arreglos
import { ArreglosComponent } from './arreglos/arreglos/arreglos.component';
import { FormarreglosComponent } from './arreglos/formarreglos/formarreglos.component';
import { EditarreglosComponent } from './arreglos/editarreglos/editarreglos.component';
//Menus
import { MenusComponent } from './menus/menus/menus.component';
import { FormmenusComponent } from './menus/formmenus/formmenus.component';
import { EditmenusComponent } from './menus/editmenus/editmenus.component';
//Submenus
import { FormsubmenusComponent } from './submenus/formsubmenus/formsubmenus.component';
import { SubmenusComponent } from './submenus/submenus/submenus.component';
import { EditsubmenusComponent } from './submenus/editsubmenus/editsubmenus.component';
//Roles
import { RolesComponent } from './roles/roles/roles.component';
import { FormrolesComponent } from './roles/formroles/formroles.component';
import { EditrolesComponent } from './roles/editroles/editroles.component';

import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { AsignarRolComponent } from './roles/asignar-rol/asignar-rol.component';
import { ListadoMenusComponent } from './menus/listado-menus/listado-menus.component';
import { ReservaClienteComponent } from './reservaciones/reserva-cliente/reserva-cliente.component';
import { ReservaclienteActivarComponent } from './reservaciones/reservacliente-activar/reservacliente-activar.component';
import { EventoClienteComponent } from './eventos/evento-cliente/evento-cliente.component';
import { EventoclienteActivarComponent } from './eventos/eventocliente-activar/eventocliente-activar.component';

const routes: Routes = [

  //Usuarios
  { path: 'usuarios', component: UsuarioComponent},
  { path: 'crear_usuario', component: FormusuarioComponent },
  { path: 'editar_usuarios/:usu_id', component: EditusuariosComponent, canActivate: [AuthAdminGuard] },
  //Eventos
  { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
  { path: 'crear_evento', component: FormeventosComponent, canActivate: [AuthGuard] },
  { path: 'editar_eventos/:eve_id', component: EditeventosComponent, canActivate: [AuthGuard] },
  //Para jefe encargado de reservaciones
  { path: 'evento_cliente', component: EventoClienteComponent, canActivate: [AuthGuard] },
  //Para administrador de reservaciones
  { path: 'eventos_cliente', component: EventoClienteComponent, canActivate: [AuthAdminGuard] },
  { path: 'activar_eventos/:ec_id', component: EventoclienteActivarComponent, canActivate: [AuthAdminGuard] },
  //reservaciones
  { path: 'reservaciones', component: ReservacionesComponent, canActivate: [AuthGuard] },
  { path: 'crear_reservaciones', component: FormreservacionesComponent, canActivate: [AuthGuard] },
  { path: 'editar_reservaciones/:res_id', component: EditreservacionesComponent, canActivate: [AuthGuard] },
  //Para administrador de reservaciones
  { path: 'reservas_cliente', component: ReservaClienteComponent, canActivate: [AuthAdminGuard] },
  { path: 'activar_reservas/:rc_id', component: ReservaclienteActivarComponent, canActivate: [AuthAdminGuard] },
  //Para jefe encargado de reservaciones
  { path: 'reserva_cliente', component: ReservaClienteComponent, canActivate: [AuthGuard] },
  //Arreglos
  { path: 'arreglos', component: ArreglosComponent, canActivate: [AuthAdminGuard] },
  { path: 'crear_arreglos', component: FormarreglosComponent, canActivate: [AuthAdminGuard] },
  { path: 'editar_arreglos/:arr_id', component: EditarreglosComponent, canActivate: [AuthAdminGuard] },
  //Menús
  { path: 'menus', component: MenusComponent, canActivate: [AuthAdminGuard] },
  { path: 'crear_menus', component: FormmenusComponent, canActivate: [AuthAdminGuard] },
  { path: 'editar_menus/:men_id', component: EditmenusComponent, canActivate: [AuthAdminGuard] },
  { path: 'listado_menus', component: ListadoMenusComponent, canActivate: [AuthAdminGuard] },
  //roles
  { path: 'roles', component: RolesComponent, canActivate: [AuthAdminGuard] },
  { path: 'crear_roles', component: FormrolesComponent, canActivate: [AuthAdminGuard] },
  { path: 'editar_roles/:rol_id', component: EditrolesComponent, canActivate: [AuthAdminGuard] },
  { path: 'asignar_rol', component: AsignarRolComponent, canActivate: [AuthAdminGuard] },
  //submenu
  { path: 'submenus', component: SubmenusComponent, canActivate: [AuthAdminGuard] },
  { path: 'crear_submenus', component: FormsubmenusComponent, canActivate: [AuthAdminGuard] },
  { path: 'editar_submenus/:sm_id', component: EditsubmenusComponent, canActivate: [AuthAdminGuard] },

  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EventosComponent,
    ReservacionesComponent,
    ArreglosComponent,
    MenusComponent,
    SubmenusComponent,
    RolesComponent,
    FormusuarioComponent,
    FormarreglosComponent,
    FormreservacionesComponent,
    FormeventosComponent,
    FormmenusComponent,
    FormsubmenusComponent,
    FormrolesComponent,
    EditmenusComponent,
    EditrolesComponent,
    EditreservacionesComponent,
    EditsubmenusComponent,
    EditusuariosComponent,
    EditarreglosComponent,
    EditeventosComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    AsignarRolComponent,
    ListadoMenusComponent,
    ReservaClienteComponent,
    ReservaclienteActivarComponent,
    EventoClienteComponent,
    EventoclienteActivarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PopoverModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    NgxPaginationModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
