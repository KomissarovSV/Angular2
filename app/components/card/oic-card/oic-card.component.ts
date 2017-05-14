import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {CardService} from "../../../services/card/card.service";
import {Response} from "@angular/http";
import {OicModal} from "./oicModal";
import {OicType} from "./oicType";
import {OicOsnov} from "./oicOsnov";

@Component({
    moduleId: module.id,
    selector: 'oic-card',
    templateUrl: 'oic-card.component.html',
    styleUrls: ['oic-card.component.css'],
    providers: [CardService]
})
export class OicCard implements OnChanges {

    @Input()
    id: number;
    cardEdit: OicModal = new OicModal();
    cardCur: OicModal = new OicModal();
    oicTypes: OicType[];
    typesOsnov: OicOsnov[];

    constructor(private cardService: CardService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.id) {
            this.cardService.getCard(this.id).subscribe((data: Response) => {
                this.cardEdit = data.json();
                this.cardCur = data.json();
            });
        } else {
            this.cardEdit = new OicModal();
            this.cardCur = new OicModal();
        }
        this.cardService.getTypes().subscribe((data: Response) => {
                this.oicTypes = data.json();
            }
        );
        this.cardService.getOsnov().subscribe((data: Response) => {
                this.typesOsnov = data.json();
            }
        );
    }

    save() {
        if (this.id){
            this.cardService.updateOic(this.cardEdit).subscribe(() => {
                    this.cardCur = Object.assign({}, this.cardEdit);
                }
            );
        }else {

        }
    }
    cancel() {
        this.cardEdit = Object.assign({}, this.cardCur);
    }

}
