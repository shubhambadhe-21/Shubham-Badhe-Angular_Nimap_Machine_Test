import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() formData!:any;

  constructor() { }

  ngOnInit() {
    console.log(this.formData);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formData']) {
      console.log('formData changed:', this.formData);
    }
  }

}
