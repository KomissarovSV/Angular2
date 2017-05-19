import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {LazyTree} from "../lazy-tree/lazy-tree.component";
import {Node} from "../lazy-tree/classes/Node";
import {GRNTI} from "../lazy-tree/classes/GRNTI";
import {OicModal} from "../oic-card/classes/oicModal";
declare var $:JQueryStatic;

@Component({
    moduleId: module.id,
    selector: 'grnti-modal',
    templateUrl: 'grnti-modal.component.html',
    styleUrls: ['grnti-modal.component.css'],
    providers: [CardService]
})
export class GrntiModal{

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
        // this.oic.grntiList.push(node.grnti-modal);
    }
}
