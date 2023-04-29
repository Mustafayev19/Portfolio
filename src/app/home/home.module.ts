import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  exports: [HomeComponent, NavbarComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent]
})
export class HomeModule { }
