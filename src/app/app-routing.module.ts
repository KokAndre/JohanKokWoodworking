import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '', component: SideNavComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full',
      },
      {
        path: 'home', component: HomePageComponent
      },
      {
        path: 'products', component: ProductsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
