import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'courses',
  component: CoursesComponent
}, {
  path: 'courses/:name',
  component: CourseComponent
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**', 
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
