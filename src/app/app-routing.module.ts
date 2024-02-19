import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoFavoritosComponent } from './cuerpo-favoritos/cuerpo-favoritos.component';
import { CuerpoFormularioComponent } from './cuerpo-formulario/cuerpo-formulario.component';
import { CuerpoPrincipalComponent } from './cuerpo-principal/cuerpo-principal.component';
import { CuerpoTallaMedidaComponent } from './cuerpo-talla-medida/cuerpo-talla-medida.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: CuerpoPrincipalComponent },
  { path: 'elegir', component: CuerpoTallaMedidaComponent },
  { path: 'resultados', component: CuerpoFormularioComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
