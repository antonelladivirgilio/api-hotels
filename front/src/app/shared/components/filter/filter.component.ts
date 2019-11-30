import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter.component.scss"],
    host: { class: "container-filter" }
})
export class FilterComponent implements OnInit {
    public stars = [1, 2, 3, 4, 5];
    constructor() {}

    ngOnInit() {}
}
