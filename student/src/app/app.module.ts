import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule } from '@angular/router';
import {HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';






import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
