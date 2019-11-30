import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Componentes
import { HomeComponent } from "./pages/home/home.component";
import { PageHotelsComponent } from "./pages/page-hotels/page-hotels.component";
import { HotelDetailComponent } from "./pages/hotel-detail/hotel-detail.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

const routes = [
    {
        path: "",
        redirectTo: "/hoteles",
        pathMatch: "full"
    },
    { path: "hoteles", component: PageHotelsComponent },
    { path: "hoteles/:id", component: HotelDetailComponent },
    { path: "**", component: PageNotFoundComponent }
];

export default RouterModule.forRoot(routes);
