import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {Response} from "@angular/http";
import {OicModal} from "./classes/oicModal";
import {OicType} from "./classes/oicType";
import {OicOsnov} from "./classes/oicOsnov";

@Component({
    moduleId: module.id,
    selector: 'oic-modal',
    templateUrl: 'oic-modal.component.html',
    styleUrls: ['oic-modal.component.css'],
    providers: [CardService]
})
export class OicModalComponent implements OnChanges {

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
        });
        this.cardService.getOsnov().subscribe((data: Response) => {
                this.typesOsnov = data.json();
        });
    }

    save() {
        if (this.id){
            this.cardService.updateOic(this.cardEdit).subscribe(() => {
                    this.cardCur = Object.assign({}, this.cardEdit);
                }
            );
        }else {
            this.cardService.createOic(this.cardEdit).subscribe(() => {
                    this.cardCur = Object.assign({}, this.cardEdit);
                }
            );
        }
    }
    cancel() {
        this.cardEdit = Object.assign({}, this.cardCur);
    }

}
