import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppOneModule } from 'projects/appOne/src/app/appOne.module';
import { AppTwoModule } from 'projects/appTwo/src/app/appTwo.module';

import { AppComponent } from './app.component';
import { GlobalService } from './service/global.service';

const packageCheck = {
  provide: APP_INITIALIZER,
  useFactory: (gs: GlobalService, http: HttpClient) => function() {
    http.get('assets/enabled.json').toPromise().then(ui => {
      gs.usingAppOne = ui['appOne'];
      gs.usingAppTwo = ui['appTwo'];
    });
    return true;
  },
  deps: [GlobalService, HttpClient],
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppOneModule,
    AppTwoModule
  ],
  providers: [GlobalService, packageCheck],
  bootstrap: [AppComponent]
})
export class AppModule { }
