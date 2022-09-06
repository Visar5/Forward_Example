import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: '/home'},
{ path: 'profile', component: ProfileComponent },
{ path: 'home', component: HomeComponent },
{
  path: 'profile/:id',
  component: ProfileComponent,
  children: [{ path: '', component: ProfileComponent }]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
