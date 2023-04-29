import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { animation: 'home' } },
  { path: "about", component: AboutComponent, data: { animation: 'about' } },
  { path: "experience", component: ExperienceComponent, data: { animation: 'experience' } },
  { path: "projects", component: ProjectsComponent, data: { animation: 'projects' } },
  { path: "contact", component: ContactComponent, data: { animation: 'contact' } },
  { path: '**', redirectTo: "/home", data: { animation: '**' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
