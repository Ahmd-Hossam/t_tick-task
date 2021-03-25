import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';

//me
import { ResizableModule } from 'angular-resizable-element';
import { AngularResizedEventModule } from 'angular-resize-event';
import {AutoSizeInputModule} from 'ngx-autosize-input';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

//firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule} from '@angular/fire/storage'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResizableModule,
    AutoSizeInputModule,
    AngularResizedEventModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC3a4bzSr6XLzIOhqQkzaerdh8wV4ux2Eg",
      authDomain: "ttic-1b1ea.firebaseapp.com",
      projectId: "ttic-1b1ea",
      storageBucket: "ttic-1b1ea.appspot.com",
      messagingSenderId: "347509553157",
      appId: "1:347509553157:web:6023241aa64d59682ec46c",
      measurementId: "G-R7WT3KMDBX"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxQRCodeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
