import {Component, ViewChild, ElementRef, OnInit} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {Response} from "@angular/http";
import {Tree} from "./Tree";
import {Node} from "./Node";
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'lazy-tree',
    templateUrl: 'lazy-tree.component.html',
    styleUrls:['lazy-tree.component.css'],
    providers: [CardService]
})
export class LazyTree implements OnInit{

    @ViewChild("tree")
    treeElement:ElementRef;
    tree:Tree;

    constructor(private cardService: CardService) {
    }

    ngOnInit(){
        this.cardService.getTree().subscribe((data: Response) => {
            this.tree = data.json();
            let cardService = this.cardService;
            this.tree.lazyLoad = function (node:Node, callback:Function) {
                cardService.getNodes(node.grnti.id)
                    .subscribe((data: Response) => callback(data.json()));
            };
            $(this.treeElement.nativeElement).treeview(this.tree);
        });
    }

    search(text:string){
        $(this.treeElement.nativeElement).treeview('search', [text, {
            ignoreCase: true,     // case insensitive
            exactMatch: false,    // like or equals
            revealResults: true,  // reveal matching nodes
        }]);
    }

}
