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
var Card = (function () {
    function Card(cardService) {
        this.cardService = cardService;
    }
    Card.prototype.ngOnInit = function () {
        this.clickAllOic();
    };
    Card.prototype.clickAllOic = function () {
        var _this = this;
        this.cardService.getAllOic().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickBalanceOic = function () {
        var _this = this;
        this.cardService.getOicByBalance().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickInActiveOic = function () {
        var _this = this;
        this.cardService.getOicInActive().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickInnavationsOic = function () {
        var _this = this;
        this.cardService.getOicByInnovations().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickProgramsOic = function () {
        var _this = this;
        this.cardService.getOicByPrograms().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickKnowHowOic = function () {
        var _this = this;
        this.cardService.getOicByKnowHow().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickFondsOic = function () {
        var _this = this;
        this.cardService.getOicByFonds().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickContractsOic = function () {
        var _this = this;
        this.cardService.getOicByContracts().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickRnDOic = function () {
        var _this = this;
        this.cardService.getOicByRnD().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    Card.prototype.clickDepartmentsOic = function () {
        var _this = this;
        this.cardService.getOicByDepartments().subscribe(function (data) { return _this.oicList = data.json(); });
    };
    return Card;
}());
Card = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'card',
        templateUrl: 'card.component.html',
        providers: [card_service_1.CardService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], Card);
exports.Card = Card;
//# sourceMappingURL=card.component.js.map