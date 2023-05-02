import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sample } from 'rxjs';
import { SampleComponent } from './sample/sample.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'sample', component:SampleComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
