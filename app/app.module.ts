import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { RouterModule } from "@angular/router"
import { Card } from './components/card/card.component'
import { HttpModule } from '@angular/http'
import {CommonTable} from "./components/common-table/common-table.component";
import {DepartmentTable} from "./components/department-table/department-table.component";
import {OicModalComponent} from "./components/oic-modal/oic-modal.component";
import {FormsModule} from "@angular/forms";
import {AuthorsModal} from "./components/authors-modal/authors-modal.component";
import {LazyTree} from "./components/lazy-tree/lazy-tree.component";
import {GrntiModal} from "./components/grnti-modal/grnti-modal.component";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([

        ])],
    declarations:[AppComponent,Card,CommonTable,DepartmentTable,OicModalComponent,AuthorsModal,LazyTree,GrntiModal],
    bootstrap:[AppComponent]
})
export class AppModule{

}