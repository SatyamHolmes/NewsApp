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
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
  ],
  providers: [
    ApiKeyInterceptorProvider,
    {provide: NewsApiService, useClass: NewsApiImplementationService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
