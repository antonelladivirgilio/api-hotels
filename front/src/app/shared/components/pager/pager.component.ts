import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

// Servicio
import { HotelService } from "../../services/hotel.service";

@Component({
    selector: "app-pager",
    templateUrl: "./pager.component.html",
    styleUrls: ["./pager.component.scss"]
})
export class PagerComponent implements OnInit {
    @Input() private currentPage: number = 1;

    @Input() private totalHotels: number;

    // pager object
    private pager: any = {};

    @Output()
    private pageChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private hotelService: HotelService) {}

    getHotels(): void {
        this.hotelService.getHotels().subscribe(hotels => {
            // Seteo el total de registros que tengo en la base
            this.totalHotels = hotels.length;
        });
    }

    next() {
        console.log("holis", this.currentPage);
        this.pageChange.emit(this.currentPage + 1);
    }

    prev() {}

    setPage(page: number) {}

    ngOnInit() {
        this.getHotels();
    }
}
