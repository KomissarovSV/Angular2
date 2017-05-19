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
var oicModal_1 = require("./classes/oicModal");
var OicModalComponent = (function () {
    function OicModalComponent(cardService) {
        this.cardService = cardService;
        this.cardEdit = new oicModal_1.OicModal();
        this.cardCur = new oicModal_1.OicModal();
    }
    OicModalComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.id) {
            this.cardService.getCard(this.id).subscribe(function (data) {
                _this.cardEdit = data.json();
                _this.cardCur = data.json();
            });
        }
        else {
            this.cardEdit = new oicModal_1.OicModal();
            this.cardCur = new oicModal_1.OicModal();
        }
        this.cardService.getTypes().subscribe(function (data) {
            _this.oicTypes = data.json();
        });
        this.cardService.getOsnov().subscribe(function (data) {
            _this.typesOsnov = data.json();
        });
    };
    OicModalComponent.prototype.save = function () {
        var _this = this;
        if (this.id) {
            this.cardService.updateOic(this.cardEdit).subscribe(function () {
                _this.cardCur = Object.assign({}, _this.cardEdit);
            });
        }
        else {
            this.cardService.createOic(this.cardEdit).subscribe(function () {
                _this.cardCur = Object.assign({}, _this.cardEdit);
            });
        }
    };
    OicModalComponent.prototype.cancel = function () {
        this.cardEdit = Object.assign({}, this.cardCur);
    };
    return OicModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], OicModalComponent.prototype, "id", void 0);
OicModalComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'oic-modal',
        templateUrl: 'oic-modal.component.html',
        styleUrls: ['oic-modal.component.css'],
        providers: [card_service_1.CardService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], OicModalComponent);
exports.OicModalComponent = OicModalComponent;
//# sourceMappingURL=oic-modal.component.js.map