/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/* Components */
import { AppComponent } from './app.component';
import { MarkComponent } from './components/mark/mark.component';
/* Pipes */
import { IterablePipe } from './pipes/index';
/* Services */
import { GameService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    MarkComponent,
    IterablePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ GameService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
