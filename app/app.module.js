"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var card_component_1 = require("./components/card/card.component");
var http_1 = require("@angular/http");
var common_table_component_1 = require("./components/common-table/common-table.component");
var department_table_component_1 = require("./components/department-table/department-table.component");
var oic_card_component_1 = require("./components/oic-card/oic-card.component");
var forms_1 = require("@angular/forms");
var authors_modal_component_1 = require("./components/authors-modal/authors-modal.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([])
        ],
        declarations: [app_component_1.AppComponent, card_component_1.Card, common_table_component_1.CommonTable, department_table_component_1.DepartmentTable, oic_card_component_1.OicCard, authors_modal_component_1.AuthorsModal],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map