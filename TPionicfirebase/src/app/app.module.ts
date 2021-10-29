import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// partie connexion

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


export const firebaseConfig = {
  apiKey: "AIzaSyCI5WnoxXJWg08UhxUq108QhedGT_1cDKo",
  authDomain: "tpionic-ea08a.firebaseapp.com",
  projectId: "tpionic-ea08a",
  storageBucket: "tpionic-ea08a.appspot.com",
  messagingSenderId: "621612615628",
  appId: "1:621612615628:web:875cf68d7ad98f40c37f69",
  measurementId: "G-P0G5DTJDJ0"
};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
