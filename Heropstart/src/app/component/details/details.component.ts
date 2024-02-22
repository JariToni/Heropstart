import { Component, inject } from '@angular/core';
import { HousingService } from '../../Service/housing.service';
import { HousingLocation } from '../../Interface/housing-location';
import { ActivatedRoute } from '@angular/router';
// import { RelatedComponent } from '../related/related.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
housingLocation : HousingLocation | undefined; 



constructor (public housingService: HousingService, public route: ActivatedRoute) {
  const housingLocationId = Number(this.route.snapshot.params['id']);
  this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
    this.housingLocation = housingLocation;
  });

 
  
}
}
