import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { CoursesComponent } from './courses/courses.component';
import { HeroComponent } from './hero/hero.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

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
},
{
  path:"hero",component:HeroComponent
},{
  path: "read-more/:indexRouting", component: NewsDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
