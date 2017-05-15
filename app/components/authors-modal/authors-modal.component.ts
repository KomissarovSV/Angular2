import {Component, Input, ViewChild, ElementRef, OnInit} from '@angular/core'
import {CardService} from "../../services/card/card.service";
import {OicModal} from "../oic-card/oicModal";
import {Response} from "@angular/http";

@Component({
    moduleId: module.id,
    selector: 'authors-modal',
    templateUrl: 'authors-modal.component.html',
    styleUrls: ['authors-modal.component.css'],
    providers: [CardService]
})
export class AuthorsModal implements OnInit{

    @Input()
    oic:OicModal = new OicModal();

    @ViewChild("tree")
    tree:ElementRef;
    list:any[];

    constructor(private cardService: CardService) {
    }

    ngOnInit(){
        this.cardService.getTree().subscribe((data: Response) => {
                this.list = data.json();
                $(this.tree.nativeElement).treeview({data: this.list});
        });
    }

    drawTree(){

    }
}
