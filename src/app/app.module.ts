import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.componet';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { VotantesComponent } from './votantes/votantes.component';
import { VotanteService} from './votantes/votante.service';
import { RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './votantes/form.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'', redirectTo: '/votantes', pathMatch: 'full'},
  {path:'directivas', component: DirectivaComponent},
  {path:'votantes', component: VotantesComponent},
  {path:'votantes/form',component:FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    VotantesComponent,
    FormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [VotanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
