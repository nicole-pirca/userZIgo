import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/modelo/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  @Input()
  userEditar!: User;

  @Output()
  enviarFormularioEvent: EventEmitter<User> = new EventEmitter<User>();

  seasons: string[] = ['True', 'False'];

  nombreFormulario!: string;
  apellidoFormulario!: string;
  direccionFormulario!: string;
  fechaNacimientoFormulario!: string;
  cuentaformulario!: boolean;
  numHijoFormulario!: number;

  saldoformulario: number = 0;

  fechaHoy = new Date();

  dateSelected!: Date;

  minDate: Date = new Date();

  editable: Boolean = true;

  restaAnios: number = 0;

  // formularioUser = new FormGroup({

  //   nombreFormulario: new FormControl('',Validators.required),
  //   apellidoFormulario: new FormControl('',Validators.required),
  //   direccionFormulario: new FormControl('',Validators.required),
  //   fechaNacimientoFormulario: new FormControl('',Validators.required),
  //   cuentaformulario: new FormControl('',Validators.required),
  //   numHijoFormulario: new FormControl('',Validators.required),
  //   saldoformulario: new FormControl('',Validators.required), 
  // });

  constructor() { }



  handleDOBChange(event: any) {

    var fechaFormulario = new Date(event.value);
    this.restaAnios = Number(this.fechaHoy.getFullYear()) - Number(fechaFormulario.getFullYear())
    
    if (this.restaAnios <= 18) {
      
      alert('Debe ser mayor de edad');
      return this.fechaNacimientoFormulario = ' ';

    } else {
      return this.fechaNacimientoFormulario = this.convert(event.value);
    }

  }
 
  ngOnInit(): void {

    if (this.userEditar) {
      this.llenarFormulario();
    }
  }
  llenarFormulario() {
    this.editable = false;
    this.nombreFormulario = this.userEditar.nombre;
    this.apellidoFormulario = this.userEditar.apellido;
    this.direccionFormulario = this.userEditar.direccion;
    this.fechaNacimientoFormulario = this.convert(
      this.userEditar.fechaNacimiento
    );
    this.cuentaformulario = this.userEditar.cuenta;
    this.numHijoFormulario = this.userEditar.numHijos;
  }

  enviarFormulario(formulario: NgForm) {
    this.enviarFormularioEvent.emit(
      new User(
        formulario.form.value.nombre,
        formulario.form.value.apellido,
        formulario.form.value.direccion,
        formulario.form.value.fechaNacimiento,
        formulario.form.value.cuenta,
        formulario.form.value.numHijos,
        formulario.form.value.saldo
      )
    );
  }

  convert(fecha: string) {
    var date = new Date(fecha),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join('-');
  }
 
}
