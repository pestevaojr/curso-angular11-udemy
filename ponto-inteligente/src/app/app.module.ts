import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { 
  CadastroPfModule, 
  CadastroPfRoutingModule, 
  CadastroPjModule, 
  CadastroPjRoutingModule, 
  LoginModule, 
  LoginRoutingModule 
} from './autenticacao';
import { FuncionarioModule, FuncionarioRoutingModule } from './funcionario';
import { AdminModule, AdminRoutingModule } from './admin';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,

    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
