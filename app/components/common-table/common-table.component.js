"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var card_service_1 = require("../../services/card/card.service");
var CommonTable = (function () {
    function CommonTable() {
        this.onChanged = new core_1.EventEmitter();
    }
    CommonTable.prototype.rowClick = function (id) {
        this.onChanged.emit(id);
    };
    return CommonTable;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CommonTable.prototype, "oicList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CommonTable.prototype, "onChanged", void 0);
CommonTable = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'common-table',
        templateUrl: 'common-table.component.html',
        providers: [card_service_1.CardService]
    })
], CommonTable);
exports.CommonTable = CommonTable;
//# sourceMappingURL=common-table.component.js.map