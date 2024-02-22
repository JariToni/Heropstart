import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../Interface/housing-location';
import { HousingService } from '../../Service/housing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {
housingLocationList: HousingLocation[] = [];
filteredLocationList: HousingLocation[] = [];
filterText = '';
constructor(private housingService: HousingService, @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef) {
  this.housingService.getAllHousingLocations().then((housingLocationList : HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
    
  }
  
    );
}
filterResult() {
  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation =>
      housingLocation.name.toLowerCase().includes(this.filterText.toLowerCase())
  );
  this.changeDetectorRef.detectChanges();
}
}
