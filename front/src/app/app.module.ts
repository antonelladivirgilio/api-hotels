import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterModule } from "@angular/router";

// Services
import { HotelService } from "./shared/services/hotel.service";

// Routes
import AppRoutingModule from "./app-routing.module";

// Componentes
import { AppComponent } from "./app.component";

import { RatingComponent } from "./shared/components/rating/rating.component";
import { AmenitieComponent } from "./shared/components/amenitie/amenitie.component";
import { HotelComponent } from "./shared/components/hotel/hotel.component";
import { FilterComponent } from "./shared/components/filter/filter.component";
import { PagerComponent } from "./shared/components/pager/pager.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";

import { HomeComponent } from "./pages/home/home.component";
import { HotelDetailComponent } from "./pages/hotel-detail/hotel-detail.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { PageHotelsComponent } from "./pages/page-hotels/page-hotels.component";

// Pipes
import { ReversePipe } from "./shared/pipes/reverse.pipe";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        FilterComponent,
        HotelComponent,
        RatingComponent,
        AmenitieComponent,
        HotelDetailComponent,
        PageNotFoundComponent,
        PageHotelsComponent,
        ReversePipe,
        PagerComponent
    ],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
    providers: [HotelService],
    bootstrap: [AppComponent]
})
export class AppModule {}
