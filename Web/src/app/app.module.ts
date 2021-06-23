import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './site/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ListarUsuarioComponent } from './view/listar-usuario/listar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    LoginComponent,
    EditComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ListarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
