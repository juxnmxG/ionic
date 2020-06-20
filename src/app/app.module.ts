import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingPage } from './setting/setting.page';
import { ApiPage } from "./api/api.page";
import { HttpClientModule } from '@angular/common/http';
import { RestService }  from './service/rest.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    SettingPage,
    ApiPage
  ],
  entryComponents: [

  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
    
  providers: [
    StatusBar,
    SplashScreen,
    RestService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
