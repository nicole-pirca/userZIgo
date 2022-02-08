import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modelo/user';
import { UserService } from 'src/app/servicios/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-user',
  templateUrl: './listar-user.component.html',
  styleUrls: ['./listar-user.component.css']
})
export class ListarUserComponent implements OnInit {

  columnas: string[] = ['nombre', 'apellido', 'direccion', 'fechaNacimiento', 'cuenta','numHijos','saldo', 'acciones'];

  arregloUser: User[] = [];

  dataSource = new MatTableDataSource<User>();

  constructor(private readonly _userService: UserService,) { }

  ngOnInit(): void {

    this._userService.get().subscribe(
      users => {
        this.arregloUser = users;
        this.dataSource.data = this.arregloUser;
        console.log('QUE SALE',this.dataSource.data);
      }
    )}
   
    eliminarUser(id: number) {
      const observableEliminarProducto = this._userService.delete(id);
      observableEliminarProducto
        .subscribe(
          () => {
            const indice = this.arregloUser.findIndex(producto => producto.id === id);
            this.arregloUser.splice(indice, 1);
            this.dataSource.data = this.arregloUser;
          },
          error => {
            console.error('Error eliminando user', error);
          }
        );
    }

  }

  


