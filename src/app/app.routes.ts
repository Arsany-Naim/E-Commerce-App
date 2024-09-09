import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [

    {path: '', component: AuthLayoutComponent, children:[
        {path:'', redirectTo:'signin', pathMatch:'full'},
        {path: 'signup', component: SignupComponent, title:'Signin'},
        {path: 'signin', component: SigninComponent, title:'Signup'},
    ]},

    {path: '', component: MainLayoutComponent, children:[
        {path:'home', component:HomeComponent, title:'Home'},
        {path:'brands', component:BrandsComponent, title:'Brands'},
        {path:'categories', component:CategoriesComponent, title:'Categories'},
        {path:'orders', component:OrdersComponent, title:'Orders'},
        {path:'products', component:ProductsComponent, title:'Products'},
        {path:'cart', component:CartComponent, title:'Cart'},
        {path:'wishlist', component:WishlistComponent, title:'Wishlist'}
    ]},

    {path:'**', component:NotFoundComponent, title:'Notfound'}
];
