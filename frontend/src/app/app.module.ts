import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from 'src/app/navigationModule/navigation.module';
import { PageNotFoundModule } from 'src/app/pageNotFoundModule/pageNotFound.module';
import { HomeModule } from 'src/app/homeModule/home.module';
import { AuthModule } from 'src/app/authModule/auth.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AuthModule,
    PageNotFoundModule,
    NavigationModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
