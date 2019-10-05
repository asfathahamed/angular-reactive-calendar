import 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './containers/app/app.component';
import { DayViewComponent } from './components/day-view/day-view.component';
import { WeekViewComponent } from './components/week-view/week-view.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { DayDetailComponent } from './components/day-detail/day-detail.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// replace this config here with the one from firebase
export const firebaseConfig = {
    apiKey: "AIzaSyC3nyVqpt5Qy8FPzr8P1Op10yKMuv0GDDs",
    authDomain: "angular-reactive-calendar.firebaseapp.com",
    databaseURL: "https://angular-reactive-calendar.firebaseio.com",
    projectId: "angular-reactive-calendar",
    storageBucket: "angular-reactive-calendar.appspot.com",
    messagingSenderId: "1048153167319",
    appId: "1:1048153167319:web:f4d6a927325158db2ce792"
};

@NgModule({
    declarations: [
        AppComponent,
        DayViewComponent,
        WeekViewComponent,
        MonthViewComponent,
        DayDetailComponent,
        TopbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatToolbarModule,
        MatIconModule,
        AngularFireModule.initializeApp(firebaseConfig, 'reactive-calendar'),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
