import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetDistanceService } from '../services/get-distance.service'

@Component({
  selector: 'app-distance-form',
  templateUrl: './distance-form.component.html',
  styleUrls: ['./distance-form.component.scss']
})
export class DistanceFormComponent implements OnInit {
  distanceForm:FormGroup;
  source: string;
  destination: string;
  distance;
  constructor(private getDistanceService:GetDistanceService) { }

  ngOnInit(): void {
    this.distanceForm = new FormGroup({
      source: new FormControl(''),
      destination: new FormControl('')})
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.distanceForm.value);
    this.destination = this.distanceForm.value.destination;
    this.source = this.distanceForm.value.source;
    this.getDistanceService.getDistance(this.destination,this.source)
    .subscribe((data ) => console.log(data));
  }
}
