import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Schnitzel } from '../pages/schnitzel/schnitzel';
import { Dickbutt } from '../pages/dickbutt/dickbutt';
import { Kasknoedel } from '../pages/kasknoedel/kasknoedel';
import { Pizza } from '../pages/pizza/pizza';
import { Schnitzel2 } from '../pages/schnitzel2/schnitzel2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Schnitzel,
    Dickbutt,
    Kasknoedel,
    Pizza,
    Schnitzel2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Schnitzel,
    Dickbutt,
    Kasknoedel,
    Pizza,
    Schnitzel2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
