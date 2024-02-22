import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../Interface/housing-location';
import { HousingService } from '../../Service/housing.service';


@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss'],
  standalone: true,
  
})
export class RelatedComponent {
  //binnekrijgen
  @Input() housingLocation: HousingLocation | undefined; 
//opslaan rando
  randomHouseSelectionList: HousingLocation[] = []; 

  constructor(private housingService: HousingService) {}

  ngOnInit() {
    if (this.housingLocation) {
      // Get all housing locations (assuming data is available)
      const allHouses = this.housingService.getAllHousingLocations();

      
      // this.randomHouseSelectionList = this.getRandomHouses(allHouses, 3);
    }
    console.log(this.randomHouseSelectionList);
  }

  getRandomHouses(houses: HousingLocation[], count: number): HousingLocation[] {
    if (houses.length < count) {
      return houses;
    }
    const shuffled = houses.slice(); 
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    }
    return shuffled.slice(0, count);
  }
  
}