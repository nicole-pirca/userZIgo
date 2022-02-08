import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelo/user';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router,) { }

  ngOnInit(): void {
  }
  createUser(user: User) {
    console.log('User',user);
    const ObservableCrearProducto = this._userService.add(user);
    ObservableCrearProducto.subscribe(
      () => {
      console.log('Producto registrado: ', user);
      const ruta = ['/listar-user'];
      this._router.navigate(ruta);
    } ,
    error => {
      console.error('Error registrando user', error);
    }); 
  }

}
