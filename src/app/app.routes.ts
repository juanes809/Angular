import { Routes } from '@angular/router';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MarvelpageComponent } from './pages/marvelpage/marvelpage.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { FulboComponent } from './pages/fulbo/fulbo.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"vista-detalle", component : VistaDetalleComponent},
    {path:"usuario", component : UsuarioComponent},
    {path:"lista-productos", component : ListaProductosComponent},
    {path:"", component : InicioComponent},
    {path: "registro", component : RegistroComponent},
    {path: "marvel", component : MarvelpageComponent},
    {path: "carrito", component : CarritoComponent},
    {path: "fulbo", component : FulboComponent},
    {path: "login", component : LoginComponent},
    {path: "home", component : HomeComponent},
    {path: "**", component: HomeComponent}
];
