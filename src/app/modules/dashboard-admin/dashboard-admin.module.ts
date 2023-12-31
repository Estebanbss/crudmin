import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; //Formularios Reactivos

import {NgxPaginationModule} from 'ngx-pagination'; // <-- Modulo descargado de npm para hacer paginaciónes
import { FormsModule } from '@angular/forms'; // <-- Modulo para le ngModel del banding en el listado




import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { ListadoPrestadorComponent } from './pages/prestadores-turisticos/listado-prestador/listado-prestador.component';
import { ListadoAtractivoComponent } from './pages/atractivos-turisticos/listado-atractivo/listado-atractivo.component';
import { ListadoMunicipioComponent } from './pages/municipios/listado-municipio/listado-municipio.component';
import { ListadoRutasComponent } from './pages/rutas-turisticas/listado-rutas/listado-rutas.component';
import { AgregarPrestadorComponent } from './pages/prestadores-turisticos/agregar-prestador/agregar-prestador.component';
import { EditarPrestadorComponent } from './pages/prestadores-turisticos/editar-prestador/editar-prestador.component';
import { AgregarAtractivoComponent } from './pages/atractivos-turisticos/agregar-atractivo/agregar-atractivo.component';
import { EditarAtractivoComponent } from './pages/atractivos-turisticos/editar-atractivo/editar-atractivo.component';
import { AgregarMunicipioComponent } from './pages/municipios/agregar-municipio/agregar-municipio.component';
import { EditarMunicipioComponent } from './pages/municipios/editar-municipio/editar-municipio.component';
import { AgregarRutasComponent } from './pages/rutas-turisticas/agregar-rutas/agregar-rutas.component';
import { EditarRutasComponent } from './pages/rutas-turisticas/editar-rutas/editar-rutas.component';
import { FiltroTextoPipe } from './pipes/filtro-texto.pipe';
import { BotonServiciosPipe } from './pipes/boton-servicios.pipe';
import { BotonMunicipioPipe } from './pipes/boton-municipio.pipe';
import { BotonZonaPipe } from './pipes/boton-zona.pipe';
import { ImportModule } from './components/import-pst/import-pst.module';
import { ImportAtractivoModule } from './components/import-atractivo/import-atractivo.module';
import { ImportMunicipioModule } from './components/import-municipio/import-municipio.module';
import { ImportRutasModule } from './components/import-rutas/import-rutas.module';
import { ImportTodoModule } from './components/import-todo/import-todo.module';
import { WarningModule } from './components/warning/warning.module';
import { WarningALLModule } from './components/warning-all/warning-all.module';
import { DataModule } from './components/data/data.module';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    ListadoPrestadorComponent,
    ListadoAtractivoComponent,
    ListadoMunicipioComponent,
    ListadoRutasComponent,
    AgregarPrestadorComponent,
    EditarPrestadorComponent,
    AgregarAtractivoComponent,
    EditarAtractivoComponent,
    AgregarMunicipioComponent,
    EditarMunicipioComponent,
    AgregarRutasComponent,
    EditarRutasComponent,
    FiltroTextoPipe,
    BotonServiciosPipe,
    BotonMunicipioPipe,
    BotonZonaPipe,

  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    ImportModule,
    ImportAtractivoModule,
    ImportMunicipioModule,
    ImportRutasModule,
    ImportTodoModule,
    WarningModule,
    WarningALLModule,
    DataModule
  ]
})
export class DashboardAdminModule { }
