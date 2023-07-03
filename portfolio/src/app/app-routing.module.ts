import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [{
  path: "",component: HomeComponent
}, {
  path: "course/:index", component: DetailsComponent
}, {
  path: "about", component: AboutComponent
}, {
  path: "contact", component: ContactComponent
}, {
  path: "cart", component: CartComponent
},
{
  path: "course", component: CoursesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
