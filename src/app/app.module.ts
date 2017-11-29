import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ExpsComponent } from './components/exps/exps.component';
import { AssignmentOneComponent } from './components/assignment-one/assignment-one.component';
import { MenuComponent } from './components/menu/menu.component';
import { StudentsComponent } from './components/students/students.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsComponent,
    ExpsComponent,
    AssignmentOneComponent,
    MenuComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
