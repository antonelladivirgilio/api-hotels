import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-amenitie",
    templateUrl: "./amenitie.component.html",
    styleUrls: ["./amenitie.component.scss"]
})
export class AmenitieComponent implements OnInit {
    @Input() amenitieType: string;

    constructor() {}

    ngOnInit() {}
}
