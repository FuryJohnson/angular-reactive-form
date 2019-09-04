import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { NgbdDatepickerFootertemplate, NgbdDatepickerPopup } from './app.component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgbModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NgbdDatepickerFootertemplate,
        NgbdDatepickerPopup
        
    ],
    bootstrap: [AppComponent, NgbdDatepickerFootertemplate, NgbdDatepickerPopup]
})
export class AppModule { }