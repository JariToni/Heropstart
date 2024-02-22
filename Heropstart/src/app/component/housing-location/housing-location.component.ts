import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../Interface/housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
@Input () housingLocation!:  HousingLocation;
}
