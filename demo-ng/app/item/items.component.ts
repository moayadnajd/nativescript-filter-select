import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

import * as elementRegistryModule from 'nativescript-angular/element-registry';
elementRegistryModule.registerElement("FilterSelect", () => require("nativescript-filter-select").FilterSelect);


@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})


export class ItemsComponent implements OnInit {
    items: Item[];
    onitemselected(args) {
       console.log('this is the selected array => '+JSON.stringify(args.selected));
    };

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}