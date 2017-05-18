import {Component, Input, ViewChild} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {OicModal} from "../oic-card/oicModal";
import {LazyTree} from "../lazy-tree/lazy-tree.component";

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

    @ViewChild(LazyTree)
    lazyTree:LazyTree;

    searchText:string;

    search(){
        this.lazyTree.search(this.searchText);
    }
}
