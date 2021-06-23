import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './site/home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'view', component: ViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'navegacao', component: NavBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
