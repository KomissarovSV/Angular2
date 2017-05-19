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
var oicModal_1 = require("../oic-modal/classes/oicModal");
var AuthorsModal = (function () {
    function AuthorsModal() {
        this.oic = new oicModal_1.OicModal();
    }
    return AuthorsModal;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", oicModal_1.OicModal)
], AuthorsModal.prototype, "oic", void 0);
AuthorsModal = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'authors-modal',
        templateUrl: 'authors-modal.component.html',
        styleUrls: ['authors-modal.component.css'],
        providers: [card_service_1.CardService]
    })
], AuthorsModal);
exports.AuthorsModal = AuthorsModal;
//# sourceMappingURL=authors-modal.component.js.map