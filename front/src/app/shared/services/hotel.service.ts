import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// Schema
import { IHotel } from "../../shared/models/hotel";

@Injectable({
    providedIn: "root"
})
export class HotelService {
    readonly URL_API: string = "/endpoints/hotel/";

    constructor(private http: HttpClient) {}

    getHotels(): Observable<IHotel[]> {
        return this.http.get<IHotel[]>(this.URL_API);
    }

    getHotel(selectedHotel: IHotel) {
        return this.http
            .get(this.URL_API + `/${selectedHotel._id}`)
            .subscribe();
    }

    getHotelByName(hotelName: string) {
        return this.http.get(this.URL_API + `/${hotelName}`).subscribe();
    }

    addHotel(selectedHotel: IHotel) {
        return this.http.post(this.URL_API, selectedHotel).subscribe();
    }

    updateHotel(selectedHotel: IHotel) {
        return this.http
            .put(this.URL_API + `/${selectedHotel._id}`, selectedHotel)
            .subscribe();
    }

    deleteHotel(selectedHotel: IHotel) {
        return this.http
            .delete(this.URL_API + `/${selectedHotel._id}`)
            .subscribe();
    }
}
