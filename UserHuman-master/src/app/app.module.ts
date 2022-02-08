import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUserComponent } from './forms/form-user/form-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { UserService } from './servicios/user.service';
import { CrearUserComponent } from './rutas/crear-user/crear-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarUserComponent } from './rutas/listar-user/listar-user.component';
import { EditarUserComponent } from './rutas/editar-user/editar-user.component';
import {MatRadioModule} from '@angular/material/radio';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    CrearUserComponent,
    ListarUserComponent,
    EditarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
