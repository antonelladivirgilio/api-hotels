/**
* 
* El componente PAGE-HOTELS es la pagina principan donde se 
* pueden visualizar todos los hoteles.
*  
* Componentes que se visualizan en PAGE-HOTELS:
* - app-header
* - app-filter
* - app-hotel
*
*/

import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-page-hotels",
    templateUrl: "./page-hotels.component.html",
    styleUrls: ["./page-hotels.component.scss"]
})
export class PageHotelsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
