import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {LazyTree} from "../lazy-tree/lazy-tree.component";
import {Node} from "../lazy-tree/classes/Node";
import {GRNTI} from "../lazy-tree/classes/GRNTI";
import {OicModal} from "../oic-modal/classes/oicModal";
declare var $:JQueryStatic;

@Component({
    moduleId: module.id,
    selector: 'grnti-modal',
    templateUrl: 'grnti-modal.component.html',
    styleUrls: ['grnti-modal.component.css'],
    providers: [CardService]
})
export class GrntiModal{

    constructor(private cardService:CardService){}

    @Input()
    oic:OicModal = new OicModal;

    @ViewChild(LazyTree)
    lazyTree:LazyTree;

    @ViewChild("grntiModal")
    modal:ElementRef;

    searchText:string;

    search(){
        this.lazyTree.search(this.searchText);
    }

    addGrnti(node:Node){
        let oic = this.oic;
        this.cardService.addGrnti(this.oic.number,node.grnti.id).subscribe(() => {
                oic.grntiList.push(node.grnti);
            }
        );
    }

    delete(grnti:GRNTI){
        let oic = this.oic;
        this.cardService.deleteGrnti(this.oic.number,grnti.id).subscribe(() => {
                let index = oic.grntiList.indexOf(grnti,0);
            oic.grntiList.splice(index,1)
            }
        );
    }
}
