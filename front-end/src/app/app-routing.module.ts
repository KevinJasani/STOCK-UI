import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sample } from 'rxjs';
import { SampleComponent } from './sample/sample.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ListingComponent } from './listing/listing.component';
import { PortfollioComponent } from './portfollio/portfollio.component';

const routes: Routes = [
  {path:'sample', component:SampleComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'listing', component:ListingComponent},
  {path:'portfollio', component:PortfollioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
