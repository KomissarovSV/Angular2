import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'
import { RouterModule } from "@angular/router"
import { Card } from './components/card/card.component'
import { HttpModule } from '@angular/http'


@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([

        ])],
    declarations:[AppComponent,Card],
    bootstrap:[AppComponent]
})
export class AppModule{

}