import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenaWebGLComponent } from './cena-web-gl/cena-web-gl.component';
import { SiteComponent } from './site/site.component';
import { InicioComponent } from './site/inicio/inicio.component';
import { SobreComponent } from './site/sobre/sobre.component';
import { ProjetosComponent } from './site/projetos/projetos.component';
import { ProdutosComponent } from './site/produtos/produtos.component';
import { ContatoComponent } from './site/contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [AppComponent, CenaWebGLComponent, SiteComponent, InicioComponent, SobreComponent, ProjetosComponent, ProdutosComponent, ContatoComponent],
  imports: [BrowserModule, AppRoutingModule,FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
