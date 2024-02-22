import { Routes } from "@angular/router";
import { HomeComponent } from "./component/home/home.component";
import { DetailsComponent } from "./component/details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {title: 'Home'}
    }, 
    {
        path: 'details/:id',
        component: DetailsComponent,
        data: {title: 'Details'}
    }
];

export default routeConfig;