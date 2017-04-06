import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { RouterModule } from "@angular/router"
import { Card } from './components/card/card.component'
import { HttpModule } from '@angular/http'
import {CommonTable} from "./components/card/common-table/common-table.component";
import {DepartmentTable} from "./components/card/department-table/department-table.component";


@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([

        ])],
    declarations:[AppComponent,Card,CommonTable,DepartmentTable],
    bootstrap:[AppComponent]
})
export class AppModule{

}