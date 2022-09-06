import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { ProfileComponent } from './profile/profile.component';




export const appRoutes: Routes = [{ path: '', pathMatch: 'full', redirectTo: '/home' },


{
    path: 'profile', component: HomeComponent,
    children: [{ path: '', component: ProfileComponent }]
}

]; 
