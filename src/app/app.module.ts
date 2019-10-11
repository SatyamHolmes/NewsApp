import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiKeyInterceptorProvider } from './ApiKeyInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { NewsApiImplementationService } from './news-api-implementation.service';
import { NewsApiService } from './news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ApiKeyInterceptorProvider,
    {provide: NewsApiService, useClass: NewsApiImplementationService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
