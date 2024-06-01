import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhpComponent } from './php/php.component';
import { PythonComponent } from './python/python.component';
import { DesingComponent } from './desing/desing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'php', component: PhpComponent },
  { path: 'python', component: PythonComponent},
  { path: 'desing', component: DesingComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Ruta comodín para manejar rutas no definidas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }