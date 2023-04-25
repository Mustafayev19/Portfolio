import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"about",component:AboutComponent},
{path:"experience",component:ExperienceComponent},
{path:"projects",component:ProjectsComponent},
{path:"contact",component:ContactComponent},
{path:'**',redirectTo:"/home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
