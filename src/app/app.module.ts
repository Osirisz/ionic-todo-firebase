import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage' ;
import { Dialogs } from '@ionic-native/dialogs' ;

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

export const config = {
  apiKey: "AIzaSyCoQ5RANBe6Vy9yuHo66faMJPEUxGEo7VI",
  authDomain: "ionic-todo-6356f.firebaseapp.com",
  databaseURL: "https://ionic-todo-6356f.firebaseio.com",
  projectId: "ionic-todo-6356f",
  storageBucket: "ionic-todo-6356f.appspot.com",
  messagingSenderId: "1076103951535"
};
@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

