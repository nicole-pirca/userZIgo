import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUserComponent } from './rutas/crear-user/crear-user.component';
import { EditarUserComponent } from './rutas/editar-user/editar-user.component';
import { ListarUserComponent } from './rutas/listar-user/listar-user.component';

const routes: Routes = [
  {
    component: CrearUserComponent,
    path: 'crear-user',
  },
  {
    component: EditarUserComponent,
    path: 'editar-user/:id',
  },
  {
    component: ListarUserComponent,
    path: 'listar-user',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
