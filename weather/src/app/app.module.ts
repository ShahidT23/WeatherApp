import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/parts/header/header.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{ProfileComponent} from './components/profile/profile.component'
import { routes } from './routes';
import { environment } from '../environments/environment';
import { ENVIRONMENT } from './core/tokens/environment_token';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseTodayModule } from './components/base-today/base-today.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
// import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NotificationsComponent

  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BaseTodayModule,
  ],
  providers: [
    HttpClient,
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
