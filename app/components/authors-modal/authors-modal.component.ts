import {Component, Input, ViewChild} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {OicModal} from "../oic-card/classes/oicModal";

@Component({
    moduleId: module.id,
    selector: 'authors-modal',
    templateUrl: 'authors-modal.component.html',
    styleUrls: ['authors-modal.component.css'],
    providers: [CardService]
})
export class AuthorsModal{

    @Input()
    oic:OicModal = new OicModal();
}
