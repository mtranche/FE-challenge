import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CardComponent } from './components/card/card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ErrorComponent } from './pages/error/error.component';
import { ShowsDataDirective } from './shows-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    DetailComponent,
    ErrorComponent,
    ShowsDataDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
