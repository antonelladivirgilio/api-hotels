import { Component, OnInit, ViewChild } from "@angular/core";

// Servicio
import { HotelService } from "../../services/hotel.service";

// Schema
import { IHotel } from "../../models/hotel";

// Component
import { AmenitieComponent } from "../amenitie/amenitie.component";
import { RatingComponent } from "../rating/rating.component";

@Component({
    selector: "app-hotel",
    templateUrl: "./hotel.component.html",
    styleUrls: ["./hotel.component.scss"],
    host: { class: "container-hotel" }
})
export class HotelComponent implements OnInit {
    public hotels;

    constructor(private hotelService: HotelService) {}

    ngOnInit() {
        this.getHotels();
    }

    getHotels(): void {
        this.hotelService.getHotels().subscribe(hotels => {
            this.hotels = hotels;
        });
    }
}
