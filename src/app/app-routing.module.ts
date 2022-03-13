import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path:'',component:MoviesComponent },
  { path:'cart',component:CartComponent },
  { path:'admin',component:AdminComponent},
  { path:'**',component:NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
