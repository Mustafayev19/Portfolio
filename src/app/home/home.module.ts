import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterContactComponent } from './footer-contact/footer-contact.component';



@NgModule({
  declarations: [HomeComponent, NavbarComponent, AboutComponent, ExperienceComponent, ProjectsComponent, FooterContactComponent],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
