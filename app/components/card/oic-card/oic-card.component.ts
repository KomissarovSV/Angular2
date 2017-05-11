import {Component} from '@angular/core'
import {CardService} from "../../../services/card/card.service";


@Component({
    moduleId:module.id,
    selector:'oic-card',
    templateUrl:'oic-card.component.html',
    styleUrls:['oic-card.component.css'],
    providers:[CardService]
})
export class OicCard {

}
