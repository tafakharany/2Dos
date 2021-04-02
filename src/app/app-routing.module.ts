import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'


const routes: Routes =
  [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: HomeComponent },
    // { path: 'tasks', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'tasks/:taskId', component: DetailsComponent },
    { path: '**', component: NotFoundComponent }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
