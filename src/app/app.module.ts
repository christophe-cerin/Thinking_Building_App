import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';
import { DBMeter } from '@ionic-native/db-meter/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { FieldType, InfluxDB, toNanoDate } from 'influx/lib/src';
import { HTTP } from '@ionic-native/http/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { File } from '@ionic-native/file/ngx';
import { HttpModule } from '@angular/http';
import { BLE } from '@ionic-native/ble/ngx';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function httpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]    
      }
    })
   
  ],
  
  providers: [

    Sensors,
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Geolocation,
    Brightness,
    Platform,
    AlertController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OpenNativeSettings,
    BatteryStatus,
    DBMeter,
    Gyroscope,
    SQLite,
    HTTP,
    SQLitePorter,
    File,
    BLE,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
