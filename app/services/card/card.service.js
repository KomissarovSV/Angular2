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
var http_1 = require("@angular/http");
var CardService = (function () {
    function CardService(http) {
        this.http = http;
        this.serverUrl = 'http://localhost:8080/api/';
    }
    CardService.prototype.getAllOic = function () {
        return this.http.get(this.serverUrl + 'card/oic/all');
    };
    CardService.prototype.getOicByInnovations = function () {
        return this.http.get(this.serverUrl + 'card/oic/innovations');
    };
    CardService.prototype.getOicByPrograms = function () {
        return this.http.get(this.serverUrl + 'card/oic/programs');
    };
    CardService.prototype.getOicByKnowHow = function () {
        return this.http.get(this.serverUrl + 'card/oic/knowhow');
    };
    CardService.prototype.getOicByBalance = function () {
        return this.http.get(this.serverUrl + 'card/oic/balance');
    };
    CardService.prototype.getOicByFonds = function () {
        return this.http.get(this.serverUrl + 'card/oic/fonds');
    };
    CardService.prototype.getOicByContracts = function () {
        return this.http.get(this.serverUrl + 'card/oic/contracts');
    };
    CardService.prototype.getOicByRnD = function () {
        return this.http.get(this.serverUrl + 'card/oic/rnd');
    };
    CardService.prototype.getOicByDepartments = function () {
        return this.http.get(this.serverUrl + 'card/oic/departments');
    };
    CardService.prototype.getOicInActive = function () {
        return this.http.get(this.serverUrl + 'card/oic/inactive');
    };
    CardService.prototype.getCard = function (id) {
        return this.http.get(this.serverUrl + 'card/oic?id=' + id);
    };
    CardService.prototype.getTypes = function () {
        return this.http.get(this.serverUrl + 'card/oic/types');
    };
    CardService.prototype.getOsnov = function () {
        return this.http.get(this.serverUrl + 'card/oic/osnov');
    };
    CardService.prototype.updateOic = function (oicModal) {
        return this.http.put(this.serverUrl + 'card/oic', oicModal);
    };
    CardService.prototype.createOic = function (oicModal) {
        return this.http.post(this.serverUrl + 'card/oic', oicModal);
    };
    CardService.prototype.getTree = function () {
        return this.http.get(this.serverUrl + 'card/oic/tree');
    };
    return CardService;
}());
CardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map