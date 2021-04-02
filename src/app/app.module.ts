import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { HeaderComponent } from './components/Shared/header/header.component';
import { FooterComponent } from './components/Shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
