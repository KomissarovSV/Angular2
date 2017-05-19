import {GRNTI} from "../../lazy-tree/classes/GRNTI";
export class OicModal {
    number:number;
    name:string;
    active:boolean;
    typeOic:number;
    typeOsnov:number;

    priorityDate:Date;
    deliveryDate:Date;
    takeDate:Date;
    duration:Date;

    secDocNum:string;
    belNum:string;
    innerNumZaiv:number;
    innerDeloNum:string;
    shifr:string;

    hasContracts:boolean;
    hasRND:boolean;
    hasFond:boolean;

    hasBalance:boolean;
    postan:Date;
    cost:number;

    balanceNote:string;
    rightNote:string;
    contactNote:string;
    generalNote:string;
    referat:string;

    authors:string;

    grntiList:GRNTI[];
}