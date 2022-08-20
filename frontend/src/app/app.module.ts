import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from 'src/app/navigationModule/navigation.module';
import { PageNotFoundModule } from 'src/app/pageNotFoundModule/pageNotFound.module';
import { HomeModule } from 'src/app/homeModule/home.module';
import { AuthModule } from 'src/app/authModule/auth.module';
import { AuthService } from 'src/app/authModule/service/auth.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthModule,
    PageNotFoundModule,
    NavigationModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
