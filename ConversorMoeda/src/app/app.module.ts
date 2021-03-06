import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './template/topo/topo.component';
import { PrincipalComponent } from './template/principal/principal.component';
import { ConverterMoedasComponent } from './converter-moedas/converter-moedas.component';
import { ConverterRealDolarComponent } from './converter-real-dolar/converter-real-dolar.component';
import { ListarSimbolosComponent } from './listar-simbolos/listar-simbolos.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PrincipalComponent,
    ConverterMoedasComponent,
    ConverterRealDolarComponent,
    ListarSimbolosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent, TopoComponent]
})
export class AppModule { }
