import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/modelo/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit {


  mostrarForm: boolean = false;


  id!: number;

  user!: User;

  constructor(private readonly _userService: UserService, private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,) { }



  ngOnInit(): void {

    
    const observableRutaUser = this._activatedRoute.params;
    observableRutaUser
      .subscribe(
        (parametros: Params) => {
          this.id = Number(parametros['id']);
          
          const observableObtenerProducto = this._userService.getById(this.id);
          
          observableObtenerProducto
            .subscribe(
              (user:any) => {
                this.user = user;
                console.log(this.user);
                this.llenarFormularioUser();
              },
              error => {
                console.error('Error obteniendo user', error);
              }
            );
        }
      );
  }

  llenarFormularioUser() {
    this.mostrarForm = true;
  }

  actualizarUser(user: User) {
    const observableActualizarUser = this._userService.update(this.id, user);
    observableActualizarUser
      .subscribe(
        () => {
          console.log('User actualizado:', user);
          const ruta = ['listar-user'];
          this._router.navigate(ruta);
          
        },
        (        error: any) => {
          console.error('Error actualizando user', error);
        }
      );
  }
 

}
